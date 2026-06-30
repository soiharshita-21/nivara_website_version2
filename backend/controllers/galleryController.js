const db = require('../config/db');
const { normalizeToRelative, getAbsoluteUrl } = require('../utils/urlHelper');

const getGallery = (req, res) => {
    db.query("SELECT * FROM gallery ORDER BY created_at DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        const mapped = results.map(row => ({
            ...row,
            image_url: getAbsoluteUrl(req, row.image_url),
            title: row.category
        }));
        res.json(mapped);
    });
};

const createGalleryItem = (req, res) => {
    const { title, image_url, image_urls, folder_date, alt_text } = req.body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        return res.status(400).json({ message: "Event Name (title) is required." });
    }

    const category = title;
    const dateVal = folder_date || "";

    if (Array.isArray(image_urls) && image_urls.length > 0) {
        const values = image_urls.map(url => [category, dateVal, normalizeToRelative(url), alt_text || ""]);
        const query = "INSERT INTO gallery (category, folder_date, image_url, alt_text) VALUES ?";
        db.query(query, [values], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Gallery folder items added successfully!", affectedRows: result.affectedRows });
        });
    } else {
        const url = image_url || "";
        if (!url) {
            return res.status(400).json({ message: "At least one Image URL or file upload is required." });
        }
        const query = "INSERT INTO gallery (category, folder_date, image_url, alt_text) VALUES (?, ?, ?, ?)";
        db.query(query, [category, dateVal, normalizeToRelative(url), alt_text || ""], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Gallery item added successfully!", id: result.insertId });
        });
    }
};

const updateGalleryFolder = (req, res) => {
    const { old_title, new_title, new_folder_date } = req.body;
    if (!old_title) {
        return res.status(400).json({ message: "Original folder name (old_title) is required." });
    }
    if (!new_title || typeof new_title !== 'string' || new_title.trim().length === 0) {
        return res.status(400).json({ message: "New folder name (new_title) is required." });
    }

    const query = "UPDATE gallery SET category = ?, folder_date = ? WHERE category = ?";
    db.query(query, [new_title, new_folder_date || "", old_title], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Gallery folder updated successfully!", affectedRows: result.affectedRows });
    });
};

const updateGalleryItem = (req, res) => {
    const { title, image_url } = req.body;
    const query = "UPDATE gallery SET category = ?, image_url = ? WHERE id = ?";
    db.query(query, [title, normalizeToRelative(image_url), req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Gallery item updated successfully!" });
    });
};

const deleteGalleryFolder = (req, res) => {
    const { category } = req.params;
    if (!category) {
        return res.status(400).json({ message: "Folder name (category) is required." });
    }
    const query = "DELETE FROM gallery WHERE category = ?";
    db.query(query, [category], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Gallery folder deleted successfully!", affectedRows: result.affectedRows });
    });
};

const deleteGalleryItem = (req, res) => {
    db.query("DELETE FROM gallery WHERE id = ?", [req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Gallery item deleted successfully!" });
    });
};

module.exports = {
    getGallery,
    createGalleryItem,
    updateGalleryFolder,
    updateGalleryItem,
    deleteGalleryFolder,
    deleteGalleryItem
};
