const db = require('../config/db');

const getBranches = (req, res) => {
    db.query("SELECT id, city, state, DATE_FORMAT(opened, '%Y-%m-%d') AS opened, address, contact, map_link, is_new FROM branches ORDER BY city ASC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

const createBranch = (req, res) => {
    const { city, state, opened, address, contact, map_link, is_new } = req.body;
    const query = "INSERT INTO branches (city, state, opened, address, contact, map_link, is_new) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [city, state, opened, address, contact, map_link || null, is_new ? 1 : 0], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Branch added successfully!", id: result.insertId });
    });
};

const updateBranch = (req, res) => {
    const { city, state, opened, address, contact, map_link, is_new } = req.body;
    const query = "UPDATE branches SET city = ?, state = ?, opened = ?, address = ?, contact = ?, map_link = ?, is_new = ? WHERE id = ?";
    db.query(query, [city, state, opened, address, contact, map_link || null, is_new ? 1 : 0, req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Branch updated successfully!" });
    });
};

const deleteBranch = (req, res) => {
    db.query("DELETE FROM branches WHERE id = ?", [req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Branch deleted successfully!" });
    });
};

module.exports = {
    getBranches,
    createBranch,
    updateBranch,
    deleteBranch
};
