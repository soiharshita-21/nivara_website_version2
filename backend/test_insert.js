const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nivara_db'
});

db.query("DESCRIBE gallery", (err, result) => {
    if (err) {
        console.error("Error formatting:", err.message);
    } else {
        console.log("Columns:", result.map(r => r.Field));
    }
    db.end();
});
