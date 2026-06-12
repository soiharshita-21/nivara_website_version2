const db = require('../config/db');

const getBlogs = (req, res) => {
    db.query("SELECT * FROM blogs ORDER BY date DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

const getBlogBySlug = (req, res) => {
    const { slug } = req.params;
    db.query("SELECT * FROM blogs WHERE slug = ?", [slug], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: "Blog not found" });
        res.json(results[0]);
    });
};

const createBlog = (req, res) => {
    const { title, slug, author, date, content, tags, image_url } = req.body;
    const query = "INSERT INTO blogs (title, slug, author, date, content, tags, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [title, slug, author, date, content, JSON.stringify(tags || []), image_url], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Blog added successfully!", id: result.insertId });
    });
};

const updateBlog = (req, res) => {
    const { title, slug, author, date, content, tags, image_url } = req.body;
    const query = "UPDATE blogs SET title = ?, slug = ?, author = ?, date = ?, content = ?, tags = ?, image_url = ? WHERE id = ?";
    db.query(query, [title, slug, author, date, content, JSON.stringify(tags || []), image_url, req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Blog updated successfully!" });
    });
};

const deleteBlog = (req, res) => {
    db.query("DELETE FROM blogs WHERE id = ?", [req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Blog deleted successfully!" });
    });
};

module.exports = {
    getBlogs,
    getBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog
};
