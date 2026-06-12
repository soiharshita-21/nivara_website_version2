const db = require('../config/db');

const getDashboardStats = (req, res) => {
    const queries = {
        blogs: "SELECT COUNT(*) as count FROM blogs",
        press: "SELECT COUNT(*) as count FROM press_releases",
        gallery: "SELECT COUNT(*) as count FROM gallery",
        pages: "SELECT COUNT(*) as count FROM pages",
        branches: "SELECT COUNT(*) as count FROM branches"
    };

    const results = {};
    let completed = 0;
    const total = Object.keys(queries).length;

    Object.keys(queries).forEach(key => {
        db.query(queries[key], (err, result) => {
            if (err) {
                results[key] = 0;
            } else {
                results[key] = result[0].count;
            }
            completed++;
            if (completed === total) {
                res.json(results);
            }
        });
    });
};

module.exports = { getDashboardStats };
