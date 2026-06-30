const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'nivara_db'
});

db.connect(err => {
    if (err) {
        console.error("❌ Failed to connect to MySQL database:", err.message);
        process.exit(1);
    }
    console.log("✅ Connected to MySQL database.");

    const queries = [
        {
            sql: "UPDATE gallery SET image_url = REPLACE(image_url, 'http://localhost:5001/uploads/', '/uploads/') WHERE image_url LIKE 'http://localhost:5001/uploads/%'",
            desc: "gallery table image_url columns"
        },
        {
            sql: "UPDATE blogs SET image_url = REPLACE(image_url, 'http://localhost:5001/uploads/', '/uploads/') WHERE image_url LIKE 'http://localhost:5001/uploads/%'",
            desc: "blogs table image_url columns"
        },
        {
            sql: "UPDATE press_releases SET image_url = REPLACE(image_url, 'http://localhost:5001/uploads/', '/uploads/') WHERE image_url LIKE 'http://localhost:5001/uploads/%'",
            desc: "press_releases table image_url columns"
        },
        {
            sql: "UPDATE pages SET banner_image = REPLACE(banner_image, 'http://localhost:5001/uploads/', '/uploads/') WHERE banner_image LIKE 'http://localhost:5001/uploads/%'",
            desc: "pages table banner_image columns"
        }
    ];

    let completed = 0;
    queries.forEach(q => {
        db.query(q.sql, (err, res) => {
            if (err) {
                console.error(`❌ Error updating ${q.desc}:`, err.message);
            } else {
                console.log(`✅ Updated ${q.desc}. Affected rows: ${res.affectedRows}`);
            }
            next();
        });
    });

    function next() {
        completed++;
        if (completed === queries.length) {
            console.log("🏁 Database URL updates complete.");
            db.end(err => {
                if (err) console.error("Error closing connection:", err.message);
                process.exit(0);
            });
        }
    }
});
