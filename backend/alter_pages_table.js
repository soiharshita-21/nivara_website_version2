const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'nivara_db'
});

db.connect(err => {
    if (err) throw err;
    db.query("ALTER TABLE pages ADD COLUMN banner_image VARCHAR(255) DEFAULT NULL", (err) => {
        if (err && err.code !== 'ER_DUP_FIELDNAME') {
            console.error(err);
        } else {
            console.log("Column banner_image added or already exists.");
        }
        process.exit(0);
    });
});
