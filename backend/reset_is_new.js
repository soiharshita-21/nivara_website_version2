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

  // Reset all is_new to 0 first
  db.query("UPDATE branches SET is_new = 0", (err, result) => {
    if (err) {
      console.error("❌ Error resetting is_new:", err.message);
      process.exit(1);
    }
    console.log("✅ Reset is_new = 0 for all branches.");

    // Update is_new = 1 for the specific 4 branches
    const updates = [
      { city: "Padappai", state: "Tamil Nadu", contact: "+91 9884234610", opened: "2026-05-20" },
      { city: "Gummidipoondi", state: "Tamil Nadu", contact: "+91 9884234610", opened: "2026-05-28" },
      { city: "Baramati", state: "Maharashtra", contact: "+91 9373059622", opened: "2026-05-28" },
      { city: "Malegaon", state: "Maharashtra", contact: "+91 9373059622", opened: "2026-05-31" }
    ];

    let completed = 0;
    updates.forEach(up => {
      const sql = "UPDATE branches SET is_new = 1, contact = ?, opened = ? WHERE city = ? AND state = ?";
      db.query(sql, [up.contact, up.opened, up.city, up.state], (err, res) => {
        if (err) {
          console.error(`❌ Error updating ${up.city}:`, err.message);
        } else {
          console.log(`✅ Set is_new = 1, contact = ${up.contact} for ${up.city}, ${up.state}. Affected rows: ${res.affectedRows}`);
          
          if (res.affectedRows === 0) {
            // Let's insert it if it doesn't exist
            console.log(`⚠️ ${up.city} not found in DB. Inserting...`);
            let address = "";
            if (up.city === "Padappai") address = "Door No.2/403, Second Floor, Bazaar Street, Padappai Town, Poonamallee Taluk, Kanchipuram District, Tamilnadu, Padappai-601301";
            else if (up.city === "Gummidipoondi") address = "S.F.No.339/2A1, Door No.67, Second floor, G.N.T Road, Gummidipoondi Town and Taluk, Tiruvallur District. Tamilnadu, Gummidipoondi-601 201";
            else if (up.city === "Baramati") address = "2nd floor, C.S.No.38/2, 38/3(Old C.S.No.38A/2/2), Atriya Business Centre, Office No.207,2nd Floor, Near Hotel Nilam Palace, Dhavan Patil Chowk, Baramati-413102";
            else if (up.city === "Malegaon") address = "1st Floor, Himani Sankul Near Dr. Ajit Powar Hospital,Patel nagar road Satana Naka Malegaon 423203";

            const insertSql = "INSERT INTO branches (city, state, opened, address, contact, is_new) VALUES (?, ?, ?, ?, ?, 1)";
            db.query(insertSql, [up.city, up.state, up.opened, address, up.contact], (err, insertRes) => {
              if (err) {
                console.error(`❌ Error inserting ${up.city}:`, err.message);
              } else {
                console.log(`✅ Inserted ${up.city} successfully.`);
              }
              next();
            });
            return;
          }
        }
        next();
      });
    });

    function next() {
      completed++;
      if (completed === updates.length) {
        console.log("🏁 Database update complete.");
        db.end(err => {
          if (err) console.error("Error closing connection:", err.message);
          process.exit(0);
        });
      }
    }
  });
});
