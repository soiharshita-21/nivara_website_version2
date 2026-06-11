const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'nivara_db'
});

const updates = [
  { city: "TIRUPATI", canon_city: "tirupati", contact: "G.Vennela (+91 6303348841)", map_link: "https://maps.app.goo.gl/fXvoB22tBz8oFGiU6?g_st=ic" },
  { city: "Pimpri", canon_city: "chinchwad", contact: "Kajal (+91 9657530664)", map_link: "https://maps.app.goo.gl/DQgbhwLuSRzbcapP9" },
  { city: "Pochampalli", canon_city: "pochampalli", contact: "Pradap C (+91 8637459290)", map_link: "https://maps.app.goo.gl/HpHRJoGsVvLpC41A6?g_st=ic" },
  { city: "Tiruppur", canon_city: "tiruppur", contact: "Nivetha S (RO) (+91 9176776110)", map_link: "https://maps.app.goo.gl/Qik9XfcNqKMwZ2tPA" },
  { city: "Machilipatnam", canon_city: "machilipatnam", contact: "Jogi Suresh/Shaik Malika (+91 9666204616 / +91 9390753665)", map_link: "https://maps.app.goo.gl/s9u3JMjDmiNW5vfi7?g_st=ic" },
  { city: "Suryapet", canon_city: "suryapet", contact: "P.Sravya (+91 7729096802)", map_link: "https://maps.app.goo.gl/UDh6WnsPyGKmKxEA6?g_st=ic" },
  { city: "Venkatagiri", canon_city: "venkatagiri", contact: "Telu Surya (+91 8374488428)", map_link: "https://maps.app.goo.gl/w477PJ1Yq4zwfMs78?g_st=ic" },
  { city: "Thiruvallur", canon_city: "thiruvallur", contact: "Aarthi R (+91 7639374963)", map_link: "https://maps.app.goo.gl/pLK2cAm92ZUZeZTp8?g_st=aw" },
  { city: "Chikkodi", canon_city: "chikkodi", contact: "Laxmi G (+91 8197159252)", map_link: "https://maps.app.goo.gl/rNzi17UhQx6dL9SG8?g_st=ic" },
  { city: "Pollachi", canon_city: "pollachi", contact: "Surya M (+91 6369952297)", map_link: "https://maps.app.goo.gl/oeDXgxe2aMiCyZrt9?g_st=aw" },
  { city: "Kancheepuram", canon_city: "kancheepuram", contact: "Lalithambigai D (+91 6385820837)", map_link: "https://maps.app.goo.gl/Gh2dchYHGX9K9LHf9?g_st=aw" },
  { city: "Arakkonam", canon_city: "arakkonam", contact: "Girija M (+91 9994650424)", map_link: "https://maps.app.goo.gl/kqYp6VrXQ6ZzuMTU8?g_st=aw" },
  { city: "Haveri", canon_city: "haveri", contact: "Srujanshree P B (+91 7975410976)", map_link: "https://maps.app.goo.gl/Z8kb1nj83wJ1cgDL7" },
  { city: "Nuziveedu", canon_city: "nuziveedu", contact: "Usha Rani (+91 9676828958)", map_link: "https://maps.app.goo.gl/VB7nzjedXwcG7qoG6" },
  { city: "Gangavathi", canon_city: "gangavathi", contact: "Mallesh (+91 7996357499)", map_link: "https://maps.app.goo.gl/ZC8SMC8JerKacSEJ8?g_st=ic" },
  { city: "Kandukur", canon_city: "kandukur", contact: "Brahmanakaka. Lakshmi Priyanka (+91 8187005368)", map_link: "https://maps.app.goo.gl/8vxCtEWGa7watGc18" },
  { city: "Gulbarga(Kalburgi)", canon_city: "gulbarga(kalburgi)", contact: "Priyanka S (+91 7624918101)", map_link: "https://maps.app.goo.gl/dHLFRQQzy8BJ6WPa8?g_st=ic" },
  { city: "Hospet", canon_city: "hospet", contact: "Shivaram H (+91 9663574680)", map_link: "https://maps.app.goo.gl/tzXfRCaXb62DBd1v7?g_st=ic" },
  { city: "Addanki", canon_city: "addanki", contact: "Pallerla Navya Sri (+91 7207303889)", map_link: "https://maps.app.goo.gl/MvoDYVAa7M5ZboYq8?g_st=ic" },
  { city: "Bidar", canon_city: "bidar", contact: "Ashwini (+91 8197007286)", map_link: "https://maps.app.goo.gl/DcAadJD3U3UXM6QY9?g_st=aw" },
  { city: "Adoni", canon_city: "adoni", contact: "S.Swapna (+91 9398329925)", map_link: "https://share.google/IMgXJ7pmSvqpxKyva" },
  { city: "Mahabubnagar", canon_city: "mahabubnagar", contact: "A. Navaneetha (+91 9052484810)", map_link: "https://maps.app.goo.gl/52sjrWKNxGVR1BgT6" },
  { city: "Tadepalligudam", canon_city: "tadepalligudem", contact: "Sowmya Mounavi (+91 7416231324)", map_link: "https://maps.app.goo.gl/k2FRofUy5vaFyu9h6?g_st=aw" },
  { city: "Nirmal", canon_city: "nirmal", contact: "B.Lavanya (+91 7671831461)", map_link: "https://maps.app.goo.gl/em3o9TmGVUP6qq8t7" },
  { city: "Belagavi", canon_city: "belagavi", contact: "Savita Narayan Kammar (+91 9632290307)", map_link: "https://maps.app.goo.gl/1pz1aZyDUB5G6znU9?g_st=ic" },
  { city: "Puttur", canon_city: "puttur", contact: "B Venkataharitha (+91 8179690530)", map_link: "https://maps.app.goo.gl/AsHRbPJJqJFzwNbMA?g_st=ic" },
  { city: "Bangarpet", canon_city: "bangarpet", contact: "Akhila V (+91 7348969517)", map_link: "https://maps.app.goo.gl/qfPSBtm48Getk2Hb6" },
  { city: "Gokak", canon_city: "gokak", contact: "Shreya Medar (+91 6363126322)", map_link: "https://maps.app.goo.gl/gdbXd7JiAZCRwsKC7?g_st=ic" },
  { city: "Sindhanur", canon_city: "sindhanur", contact: "Sharanabasava (+91 8310330744)", map_link: "https://maps.app.goo.gl/mbkKdZnU2obRaMZs9?g_st=ic" },
  { city: "Raichur", canon_city: "raichur", contact: "Pooja (+91 7337652360)", map_link: "https://maps.app.goo.gl/h2JSb7fbzXdhkGnL8" },
  { city: "Gadag", canon_city: "gadag", contact: "Jayalakshmi (+91 9591360411)", map_link: "https://maps.app.goo.gl/G4iCKG1trMmgWCWJ9?g_st=ic" },
  { city: "Vijayapura", canon_city: "vijayapura", contact: "Anitha (+91 7338160082)", map_link: "https://maps.app.goo.gl/CUX7ZdqfbbM3qxmf6?g_st=ic" },
  { city: "Ballari", canon_city: "ballari", contact: "H Ravichandra (+91 8971085401)", map_link: "https://maps.app.goo.gl/ghJMpbtGgaVnkBFo9?g_st=ic" },
  { city: "Ranebennur", canon_city: "ranebennur", contact: "Vidya S Narayani (+91 7483012269 / +91 8904869819)", map_link: "https://maps.app.goo.gl/jMB7NkRm5vLy6fP4A?g_st=ic" },
  { city: "Coimbatore", canon_city: "coimbatore", contact: "R Silambharashan (+91 8608202031)", map_link: "https://maps.app.goo.gl/zNn83AvdMeQp9ScH8?g_st=ic" },
  { city: "Kolhapur", canon_city: "kolhapur", contact: "Tejashri Arjunrav Rege (+91 7499291015)", map_link: "https://maps.app.goo.gl/skwTbxEDqV6BASF7A?g_st=ic" },
  { city: "Medchal", canon_city: "medchal", contact: "Chennuri Supraja (+91 7032476824)", map_link: "https://maps.app.goo.gl/dwekCocRy5Hm2Gv1A?g_st=ic" },
  { city: "Penukonda", canon_city: "penukonda", contact: "Boya Ajay Kumar (+91 6301679384)", map_link: "https://maps.app.goo.gl/97xGuRogfRMh6YXq5?g_st=ic" },
  { city: "Villuppuram", canon_city: "viluppuram", contact: "Yuvaraj Natarajan (+91 7397702149)", map_link: "https://maps.app.goo.gl/BrWK45qUQqG9rV3s6?g_st=ic" },
  { city: "Kurnool", canon_city: "kurnool", contact: "Madhusudhan (+91 9121945895)", map_link: "https://maps.app.goo.gl/RehThnUxW5tT34zEA?g_st=ic" },
];

db.connect(err => {
  if (err) {
    console.error("❌ Failed to connect to MySQL database:", err.message);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL database.");

  // 1. Add map_link column if not exists
  db.query("ALTER TABLE branches ADD COLUMN IF NOT EXISTS map_link VARCHAR(1000) DEFAULT NULL", (err, result) => {
    if (err) {
      // Try alternative for older MySQL versions
      console.log("Adding column using ALTER statement...");
      db.query("ALTER TABLE branches ADD COLUMN map_link VARCHAR(1000) DEFAULT NULL", (err2) => {
        if (err2 && !err2.message.includes("Duplicate column name")) {
          console.error("❌ Error adding map_link column:", err2.message);
          process.exit(1);
        }
        console.log("✅ map_link column verified/created.");
        runUpdates();
      });
    } else {
      console.log("✅ map_link column verified/created.");
      runUpdates();
    }
  });

  function runUpdates() {
    let completed = 0;
    updates.forEach(up => {
      const sql = "UPDATE branches SET contact = ?, map_link = ? WHERE LOWER(city) = LOWER(?) OR LOWER(city) = LOWER(?)";
      db.query(sql, [up.contact, up.map_link, up.city, up.canon_city], (err, res) => {
        if (err) {
          console.error("Error updating " + up.city + ":", err.message);
        } else {
          console.log("Updated " + up.city + ". Affected rows: " + res.affectedRows);
        }
        next();
      });
    });

    function next() {
      completed++;
      if (completed === updates.length) {
        console.log("Database updates successfully applied.");
        db.end(err => {
          if (err) console.error("Error closing connection:", err.message);
          process.exit(0);
        });
      }
    }
  }
});
