const db = require('../config/db');
const fs = require('fs');
const path = require('path');

const getDocuments = (req, res) => {
    const { category, include_inactive } = req.query;
    let query = `
        SELECT 
            id, 
            title, 
            category, 
            file_url, 
            file_name, 
            file_size, 
            DATE_FORMAT(publish_date, '%Y-%m-%d') AS publish_date, 
            extra_info, 
            is_active, 
            created_at, 
            updated_at 
        FROM documents 
    `;
    const params = [];
    const conditions = [];

    if (!include_inactive || include_inactive === 'false') {
        conditions.push("is_active = 1");
    }

    if (category && category.trim() !== '' && category.toLowerCase() !== 'all') {
        conditions.push("category = ?");
        params.push(category.trim());
    }

    if (conditions.length > 0) {
        query += " WHERE " + conditions.join(" AND ");
    }

    query += " ORDER BY publish_date DESC, id DESC";

    db.query(query, params, (err, results) => {
        if (err) {
            console.error("Error fetching documents:", err);
            return res.status(500).json({ message: "Failed to fetch documents", error: err });
        }
        
        // Add full_url for convenience
        const host = req.get('host');
        const protocol = req.protocol;
        const formatted = results.map(doc => ({
            ...doc,
            full_url: doc.file_url.startsWith('http') ? doc.file_url : `${protocol}://${host}${doc.file_url}`
        }));

        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.json(formatted);
    });
};

const createDocument = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "Please upload a valid PDF document." });
    }

    const { title, category, publish_date, extra_info, is_active } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({ message: "Document title is required." });
    }

    const relativeUrl = `/uploads/documents/${req.file.filename}`;
    const pubDate = publish_date && publish_date.trim() !== '' ? publish_date : new Date().toISOString().split('T')[0];
    const docCategory = category && category.trim() !== '' ? category.trim().toLowerCase() : 'general';
    const activeVal = is_active !== undefined ? (is_active === 'false' || is_active === false ? 0 : 1) : 1;

    let extraInfoStr = null;
    if (extra_info) {
        extraInfoStr = typeof extra_info === 'object' ? JSON.stringify(extra_info) : extra_info;
    }

    const query = `
        INSERT INTO documents (title, category, file_url, file_name, file_size, publish_date, extra_info, is_active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [
            title.trim(),
            docCategory,
            relativeUrl,
            req.file.originalname,
            req.file.size,
            pubDate,
            extraInfoStr,
            activeVal
        ],
        (err, result) => {
            if (err) {
                console.error("Error creating document:", err);
                return res.status(500).json({ message: "Database error while saving document", error: err });
            }

            const host = req.get('host');
            const protocol = req.protocol;

            res.status(201).json({
                message: "Document uploaded and published successfully!",
                id: result.insertId,
                title: title.trim(),
                category: docCategory,
                file_url: relativeUrl,
                full_url: `${protocol}://${host}${relativeUrl}`,
                file_name: req.file.originalname,
                file_size: req.file.size,
                publish_date: pubDate
            });
        }
    );
};

const updateDocument = (req, res) => {
    const id = req.params.id;
    const { title, category, publish_date, extra_info, is_active } = req.body;

    // First check if document exists
    db.query("SELECT * FROM documents WHERE id = ?", [id], (err, rows) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        if (rows.length === 0) return res.status(404).json({ message: "Document not found" });

        const current = rows[0];
        let newFileUrl = current.file_url;
        let newFileName = current.file_name;
        let newFileSize = current.file_size;

        if (req.file) {
            newFileUrl = `/uploads/documents/${req.file.filename}`;
            newFileName = req.file.originalname;
            newFileSize = req.file.size;

            // Delete old file if present
            if (current.file_url && current.file_url.startsWith('/uploads/documents/')) {
                const oldFilePath = path.join(__dirname, '..', current.file_url);
                if (fs.existsSync(oldFilePath)) {
                    try { fs.unlinkSync(oldFilePath); } catch (e) { console.error("Error unlinking old file:", e); }
                }
            }
        }

        const newTitle = title !== undefined ? title.trim() : current.title;
        const newCategory = category !== undefined ? category.trim().toLowerCase() : current.category;
        const newPubDate = publish_date !== undefined && publish_date.trim() !== '' ? publish_date : current.publish_date;
        const newActive = is_active !== undefined ? (is_active === 'false' || is_active === false ? 0 : 1) : current.is_active;
        let newExtraInfo = current.extra_info;
        if (extra_info !== undefined) {
            newExtraInfo = typeof extra_info === 'object' ? JSON.stringify(extra_info) : extra_info;
        }

        const updateQuery = `
            UPDATE documents 
            SET title = ?, category = ?, file_url = ?, file_name = ?, file_size = ?, publish_date = ?, extra_info = ?, is_active = ?
            WHERE id = ?
        `;

        db.query(
            updateQuery,
            [newTitle, newCategory, newFileUrl, newFileName, newFileSize, newPubDate, newExtraInfo, newActive, id],
            (updateErr) => {
                if (updateErr) {
                    console.error("Error updating document:", updateErr);
                    return res.status(500).json({ message: "Database update error", error: updateErr });
                }
                res.json({ message: "Document updated successfully!" });
            }
        );
    });
};

const deleteDocument = (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM documents WHERE id = ?", [id], (err, rows) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        if (rows.length === 0) return res.status(404).json({ message: "Document not found" });

        const doc = rows[0];

        db.query("DELETE FROM documents WHERE id = ?", [id], (delErr) => {
            if (delErr) {
                console.error("Error deleting document record:", delErr);
                return res.status(500).json({ message: "Failed to delete document from database", error: delErr });
            }

            // Remove file from disk
            if (doc.file_url && doc.file_url.startsWith('/uploads/documents/')) {
                const filePath = path.join(__dirname, '..', doc.file_url);
                if (fs.existsSync(filePath)) {
                    try {
                        fs.unlinkSync(filePath);
                    } catch (unlinkErr) {
                        console.error("Error deleting file from disk:", unlinkErr);
                    }
                }
            }

            res.json({ message: "Document deleted successfully!" });
        });
    });
};

module.exports = {
    getDocuments,
    createDocument,
    updateDocument,
    deleteDocument
};
