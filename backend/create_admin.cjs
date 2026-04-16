const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nivara_db'
});

connection.query(`
    CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`, (err) => {
    if (err) throw err;
    console.log("Admins table ensured.");
    
    connection.query(`DELETE FROM admins WHERE username = 'nivara_admin'`, async (err2) => {
        if (err2) throw err2;
        
        const username = 'nivara_admin';
        const rawPassword = 'password123';
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(rawPassword, salt);
        
        connection.query(`INSERT INTO admins (username, password_hash) VALUES (?, ?)`, [username, hash], (err3) => {
            if (err3) throw err3;
            console.log("Secure admin user created with username 'nivara_admin' and password 'password123'");
            connection.end();
        });
    });
});
