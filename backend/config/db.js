const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'nivara_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.query("SELECT 1", err => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
        console.log("👉 Tip: Make sure your MySQL service (like XAMPP or WAMP) is running.");
    } else {
        console.log(`✅ Successfully connected to MySQL Database (${process.env.DB_NAME || 'nivara_db'}) via Connection Pool`);
    }
});

module.exports = db;
