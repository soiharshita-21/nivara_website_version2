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
        console.error("❌ Database connection error:", err.message);
        process.exit(1);
    }
    console.log("Connected to database for popups table setup.");
    const sql = `
        CREATE TABLE IF NOT EXISTS popups (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            message LONGTEXT,
            image_url VARCHAR(500) DEFAULT NULL,
            link_url VARCHAR(500) DEFAULT NULL,
            link_text VARCHAR(100) DEFAULT NULL,
            start_date DATETIME NOT NULL,
            end_date DATETIME NOT NULL,
            is_active TINYINT(1) DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error("❌ Error creating popups table:", err);
            process.exit(1);
        }
        console.log("✅ Table 'popups' created or already exists.");
        db.end();
        process.exit(0);
    });
});
