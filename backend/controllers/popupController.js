const db = require('../config/db');
const { normalizeToRelative, getAbsoluteUrl } = require('../utils/urlHelper');

// Helper to format date to MySQL DATETIME format (YYYY-MM-DD HH:mm:ss)
const formatToMySqlDateTime = (dateVal) => {
    if (!dateVal) return null;
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return null;
    return d.toISOString().slice(0, 19).replace('T', ' ');
};

const DEFAULT_POPUP_DURATION_DAYS = 15;

const getPopupDateRange = (startVal, endVal) => {
    const start = startVal ? new Date(startVal) : new Date();
    if (isNaN(start.getTime())) return null;

    const end = endVal
        ? new Date(endVal)
        : new Date(start.getTime() + DEFAULT_POPUP_DURATION_DAYS * 24 * 60 * 60 * 1000);

    if (isNaN(end.getTime()) || end <= start) return null;

    return {
        formattedStart: formatToMySqlDateTime(start),
        formattedEnd: formatToMySqlDateTime(end)
    };
};

// GET /api/popups/active - Public endpoint to retrieve currently active, non-expired popups
const getActivePopups = (req, res) => {
    const query = `
        SELECT * FROM popups 
        WHERE is_active = 1 
          AND NOW() BETWEEN start_date AND end_date 
        ORDER BY created_at DESC
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching active popups:", err);
            return res.status(500).json({ message: "Failed to fetch active popups", error: err });
        }
        const mapped = results.map(row => ({
            ...row,
            image_url: row.image_url ? getAbsoluteUrl(req, row.image_url) : null
        }));
        res.json(mapped);
    });
};

// GET /api/popups - Admin endpoint to list all popups
const getAllPopups = (req, res) => {
    const query = `SELECT * FROM popups ORDER BY created_at DESC`;
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching all popups:", err);
            return res.status(500).json({ message: "Failed to fetch popups", error: err });
        }
        const mapped = results.map(row => ({
            ...row,
            image_url: row.image_url ? getAbsoluteUrl(req, row.image_url) : null
        }));
        res.json(mapped);
    });
};

// GET /api/popups/:id
const getPopupById = (req, res) => {
    const query = `SELECT * FROM popups WHERE id = ?`;
    db.query(query, [req.validatedId], (err, results) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        if (results.length === 0) return res.status(404).json({ message: "Popup not found" });
        const popup = results[0];
        if (popup.image_url) popup.image_url = getAbsoluteUrl(req, popup.image_url);
        res.json(popup);
    });
};

// POST /api/popups - Admin create new popup
const createPopup = (req, res) => {
    const { title, message, image_url, link_url, link_text, start_date, end_date, is_active } = req.body;

    const dateRange = getPopupDateRange(start_date, end_date);

    if (!dateRange) {
        return res.status(400).json({ message: "Popup dates must be valid and the end date must be after the start date." });
    }

    const cleanTitle = title.trim();
    const relativeImage = image_url ? normalizeToRelative(image_url) : null;
    const activeFlag = (is_active === false || is_active === 0) ? 0 : 1;

    const query = `
        INSERT INTO popups (title, message, image_url, link_url, link_text, start_date, end_date, is_active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [cleanTitle, message || "", relativeImage, link_url || "", link_text || "", dateRange.formattedStart, dateRange.formattedEnd, activeFlag],
        (err, result) => {
            if (err) {
                console.error("Error creating popup:", err);
                return res.status(500).json({ message: "Failed to create popup", error: err });
            }
            res.status(201).json({ message: "Popup created successfully!", id: result.insertId });
        }
    );
};

// PUT /api/popups/:id - Admin update popup
const updatePopup = (req, res) => {
    const { title, message, image_url, link_url, link_text, start_date, end_date, is_active } = req.body;

    const dateRange = getPopupDateRange(start_date, end_date);

    if (!dateRange) {
        return res.status(400).json({ message: "Popup dates must be valid and the end date must be after the start date." });
    }

    const cleanTitle = title.trim();
    const relativeImage = image_url ? normalizeToRelative(image_url) : null;
    const activeFlag = (is_active === false || is_active === 0) ? 0 : 1;

    const query = `
        UPDATE popups 
        SET title = ?, message = ?, image_url = ?, link_url = ?, link_text = ?, start_date = ?, end_date = ?, is_active = ?
        WHERE id = ?
    `;

    db.query(
        query,
        [cleanTitle, message || "", relativeImage, link_url || "", link_text || "", dateRange.formattedStart, dateRange.formattedEnd, activeFlag, req.validatedId],
        (err, result) => {
            if (err) {
                console.error("Error updating popup:", err);
                return res.status(500).json({ message: "Failed to update popup", error: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Popup not found" });
            }
            res.json({ message: "Popup updated successfully!" });
        }
    );
};

// PATCH /api/popups/:id/toggle - Admin toggle active status
const togglePopupStatus = (req, res) => {
    const query = `UPDATE popups SET is_active = NOT is_active WHERE id = ?`;
    db.query(query, [req.validatedId], (err, result) => {
        if (err) {
            console.error("Error toggling popup status:", err);
            return res.status(500).json({ message: "Failed to toggle status", error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Popup not found" });
        }
        res.json({ message: "Popup status toggled successfully!" });
    });
};

// DELETE /api/popups/:id - Admin delete popup
const deletePopup = (req, res) => {
    const query = `DELETE FROM popups WHERE id = ?`;
    db.query(query, [req.validatedId], (err, result) => {
        if (err) {
            console.error("Error deleting popup:", err);
            return res.status(500).json({ message: "Failed to delete popup", error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Popup not found" });
        }
        res.json({ message: "Popup deleted successfully!" });
    });
};

module.exports = {
    getActivePopups,
    getAllPopups,
    getPopupById,
    createPopup,
    updatePopup,
    togglePopupStatus,
    deletePopup
};
