const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'nivara_db'
});

const frontendImagesPath = path.join(__dirname, '..', 'frontend', 'src', 'assets', 'images');
const backendUploadsPath = path.join(__dirname, 'uploads');

// Ensure uploads folder exists
if (!fs.existsSync(backendUploadsPath)) {
    fs.mkdirSync(backendUploadsPath, { recursive: true });
}

const foldersToSeed = [
    {
        dir: 'CSR',
        category: 'CSR',
        folder_date: 'January 2026',
        alt: 'CSR Activity- General Medical Camp, Kolar, KA'
    },
    {
        dir: 'Anniversary 10',
        category: 'Anniversary',
        folder_date: 'October 2025',
        alt: '10th Anniversary Celebration'
    },
    {
        dir: 'Navaratri',
        category: 'Navaratri',
        folder_date: 'September 2025',
        alt: 'Nivara Navaratri Celebration'
    },
    {
        dir: 'Fire mock dril',
        category: 'Fire Mock Drill',
        folder_date: 'January 2026',
        alt: 'Fire Mock Drill & Safety Training'
    }
];

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }

    console.log("Connected to database. Starting seeding process...");

    let totalInserted = 0;
    const insertPromises = [];

    // Clear existing gallery items first to ensure a clean slate and avoid duplicates
    db.query("DELETE FROM gallery", (err) => {
        if (err) {
            console.error("Failed to clear gallery table:", err);
            db.end();
            process.exit(1);
        }
        console.log("Cleared existing gallery items.");

        foldersToSeed.forEach(folder => {
            const folderPath = path.join(frontendImagesPath, folder.dir);
            if (!fs.existsSync(folderPath)) {
                console.warn(`Directory not found: ${folderPath}`);
                return;
            }

            const files = fs.readdirSync(folderPath);
            const imageFiles = files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));

            console.log(`Found ${imageFiles.length} images in ${folder.dir}`);

            imageFiles.forEach(file => {
                const srcPath = path.join(folderPath, file);
                const uniqueFilename = `${folder.category.replace(/\s+/g, '_')}_${file.replace(/\s+/g, '_')}`;
                const destPath = path.join(backendUploadsPath, uniqueFilename);

                // Copy file to backend uploads
                fs.copyFileSync(srcPath, destPath);

                const imageUrl = `http://localhost:5001/uploads/${uniqueFilename}`;

                const p = new Promise((resolve, reject) => {
                    db.query(
                        "INSERT INTO gallery (category, folder_date, image_url, alt_text) VALUES (?, ?, ?, ?)",
                        [folder.category, folder.folder_date, imageUrl, folder.alt],
                        (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                totalInserted++;
                                resolve(result);
                            }
                        }
                    );
                });
                insertPromises.push(p);
            });
        });

        Promise.all(insertPromises)
            .then(() => {
                console.log(`Seeding complete! Successfully inserted ${totalInserted} images.`);
                db.end();
                process.exit(0);
            })
            .catch(err => {
                console.error("Error inserting images:", err);
                db.end();
                process.exit(1);
            });
    });
});
