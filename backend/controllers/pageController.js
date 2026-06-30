const db = require('../config/db');
const { normalizeToRelative, getAbsoluteUrl } = require('../utils/urlHelper');

const getPages = (req, res) => {
    db.query("SELECT * FROM pages ORDER BY created_at DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        const mapped = results.map(row => ({
            ...row,
            banner_image: getAbsoluteUrl(req, row.banner_image)
        }));
        res.json(mapped);
    });
};

const getPageBySlug = (req, res) => {
    const { slug } = req.params;
    db.query("SELECT * FROM pages WHERE slug = ?", [slug], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: "Page not found" });
        const page = results[0];
        page.banner_image = getAbsoluteUrl(req, page.banner_image);
        res.json(page);
    });
};

const createPage = (req, res) => {
    const { title, slug, content, menu_location, banner_image } = req.body;
    const query = "INSERT INTO pages (title, slug, content, menu_location, banner_image) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [title, slug, content, menu_location || 'none', normalizeToRelative(banner_image) || null], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Page added successfully!", id: result.insertId });
    });
};

const updatePage = (req, res) => {
    const { title, slug, content, menu_location, banner_image } = req.body;
    const query = "UPDATE pages SET title = ?, slug = ?, content = ?, menu_location = ?, banner_image = ? WHERE id = ?";
    db.query(query, [title, slug, content, menu_location || 'none', normalizeToRelative(banner_image) || null, req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Page updated successfully!" });
    });
};

const deletePage = (req, res) => {
    db.query("DELETE FROM pages WHERE id = ?", [req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Page deleted successfully!" });
    });
};

module.exports = {
    getPages,
    getPageBySlug,
    createPage,
    updatePage,
    deletePage
};
