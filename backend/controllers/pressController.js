const db = require('../config/db');

const getPressReleases = (req, res) => {
    db.query("SELECT * FROM press_releases ORDER BY date DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

const createPressRelease = (req, res) => {
    const { title, date, image_url, content } = req.body;
    const query = "INSERT INTO press_releases (title, date, image_url, content) VALUES (?, ?, ?, ?)";
    db.query(query, [title, date, image_url, content], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Press release added successfully!", id: result.insertId });
    });
};

const updatePressRelease = (req, res) => {
    const { title, date, image_url, content } = req.body;
    const query = "UPDATE press_releases SET title = ?, date = ?, image_url = ?, content = ? WHERE id = ?";
    db.query(query, [title, date, image_url, content, req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Press release updated successfully!" });
    });
};

const deletePressRelease = (req, res) => {
    db.query("DELETE FROM press_releases WHERE id = ?", [req.validatedId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Press release deleted successfully!" });
    });
};

module.exports = {
    getPressReleases,
    createPressRelease,
    updatePressRelease,
    deletePressRelease
};
