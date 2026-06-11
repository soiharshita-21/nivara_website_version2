const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'nivara_db'
});

const newBranches = [
  {
    city: "Gummidipoondi",
    state: "Tamil Nadu",
    opened: "2026-05-28",
    address: "S.F.No.339/2A1, Door No.67, Second floor, G.N.T Road, Gummidipoondi Town and Taluk, Tiruvallur District. Tamilnadu, Gummidipoondi-601 201",
    contact: "+91 9884234610",
    is_new: 1
  },
  {
    city: "Baramati",
    state: "Maharashtra",
    opened: "2026-05-28",
    address: "2nd floor, C.S.No.38/2, 38/3(Old C.S.No.38A/2/2), Atriya Business Centre, Office No.207,2nd Floor, Near Hotel Nilam Palace, Dhavan Patil Chowk, Baramati-413102",
    contact: "+91 9373059622",
    is_new: 1
  },
  {
    city: "Malegaon",
    state: "Maharashtra",
    opened: "2026-05-31",
    address: "1st Floor, Himani Sankul Near Dr. Ajit Powar Hospital,Patel nagar road Satana Naka Malegaon 423203",
    contact: "+91 9373059622",
    is_new: 1
  },
  {
    city: "Padappai",
    state: "Tamil Nadu",
    opened: "2026-05-20",
    address: "Door No.2/403, Second Floor, Bazaar Street, Padappai Town, Poonamallee Taluk, Kanchipuram District, Tamilnadu, Padappai-601301",
    contact: "+91 9884234610",
    is_new: 1
  }
];

db.connect(err => {
  if (err) {
    console.error("❌ Failed to connect to MySQL database:", err.message);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL database.");

  let completed = 0;

  newBranches.forEach(branch => {
    // Check if branch already exists by city and state
    const checkSql = "SELECT id FROM branches WHERE city = ? AND state = ?";
    db.query(checkSql, [branch.city, branch.state], (err, results) => {
      if (err) {
        console.error(`❌ Error checking branch ${branch.city}:`, err.message);
        checkFinished();
        return;
      }

      if (results.length > 0) {
        // Update existing branch to ensure address/contact/is_new are updated
        const updateSql = "UPDATE branches SET opened = ?, address = ?, contact = ?, is_new = ? WHERE city = ? AND state = ?";
        db.query(updateSql, [branch.opened, branch.address, branch.contact, branch.is_new, branch.city, branch.state], (err, updateRes) => {
          if (err) {
            console.error(`❌ Error updating branch ${branch.city}:`, err.message);
          } else {
            console.log(`⚡ Updated existing branch: ${branch.city}, ${branch.state}`);
          }
          checkFinished();
        });
      } else {
        // Insert new branch
        const insertSql = "INSERT INTO branches (city, state, opened, address, contact, is_new) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(insertSql, [branch.city, branch.state, branch.opened, branch.address, branch.contact, branch.is_new], (err, insertRes) => {
          if (err) {
            console.error(`❌ Error inserting branch ${branch.city}:`, err.message);
          } else {
            console.log(`➕ Inserted new branch: ${branch.city}, ${branch.state}`);
          }
          checkFinished();
        });
      }
    });
  });

  function checkFinished() {
    completed++;
    if (completed === newBranches.length) {
      console.log("🏁 Database update complete.");
      db.end(err => {
        if (err) console.error("Error closing connection:", err.message);
        process.exit(0);
      });
    }
  }
});
