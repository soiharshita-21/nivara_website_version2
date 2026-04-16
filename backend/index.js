const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const JWT_SECRET = process.env.JWT_SECRET || 'SUPER_SECRET_NIVARA_KEY';

// Configure Multer for File Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Set up a folder for uploaded images
app.use('/uploads', express.static('uploads'));

// Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'nivara_db'
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
        console.log("👉 Tip: Make sure your MySQL service (like XAMPP or WAMP) is running.");
    } else {
        console.log(`✅ Successfully connected to MySQL Database (${process.env.DB_NAME || 'nivara_db'})`);
    }
});

// --- MIDDLEWARE: Verify Token ---
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized access" });
        }
        req.adminId = decoded.id;
        next();
    });
};

// --- AUTH ROUTE ---
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.query("SELECT * FROM admins WHERE username = ?", [username], async (err, results) => {
        if (err) return res.status(500).json({ message: "Server error" });
        if (results.length === 0) return res.status(401).json({ message: "Invalid username or password" });

        const admin = results[0];
        const isMatch = await bcrypt.compare(password, admin.password_hash);

        if (!isMatch) return res.status(401).json({ message: "Invalid username or password" });

        const token = jwt.sign({ id: admin.id, username: admin.username }, JWT_SECRET, { expiresIn: '12h' });
        res.json({ token, message: "Login successful" });
    });
});

// --- IMAGE UPLOAD ROUTE ---
app.post('/api/upload', verifyToken, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    res.json({ imageUrl });
});

// --- BLOG ROUTES ---
app.get('/api/blogs', (req, res) => {
    db.query("SELECT * FROM blogs ORDER BY date DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.get('/api/blogs/:slug', (req, res) => {
    const { slug } = req.params;
    db.query("SELECT * FROM blogs WHERE slug = ?", [slug], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: "Blog not found" });
        res.json(results[0]);
    });
});

app.post('/api/blogs', verifyToken, (req, res) => {
    const { title, slug, author, date, content, tags, image_url } = req.body;
    const query = "INSERT INTO blogs (title, slug, author, date, content, tags, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [title, slug, author, date, content, JSON.stringify(tags || []), image_url], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Blog added successfully!", id: result.insertId });
    });
});

app.put('/api/blogs/:id', verifyToken, (req, res) => {
    const { title, slug, author, date, content, tags, image_url } = req.body;
    const query = "UPDATE blogs SET title = ?, slug = ?, author = ?, date = ?, content = ?, tags = ?, image_url = ? WHERE id = ?";
    db.query(query, [title, slug, author, date, content, JSON.stringify(tags || []), image_url, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Blog updated successfully!" });
    });
});

app.delete('/api/blogs/:id', verifyToken, (req, res) => {
    db.query("DELETE FROM blogs WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Blog deleted successfully!" });
    });
});

// --- PRESS RELEASE ROUTES ---
app.get('/api/press', (req, res) => {
    db.query("SELECT * FROM press_releases ORDER BY date DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.post('/api/press', verifyToken, (req, res) => {
    const { title, date, image_url, content } = req.body;
    const query = "INSERT INTO press_releases (title, date, image_url, content) VALUES (?, ?, ?, ?)";
    db.query(query, [title, date, image_url, content], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Press release added successfully!", id: result.insertId });
    });
});

app.put('/api/press/:id', verifyToken, (req, res) => {
    const { title, date, image_url, content } = req.body;
    const query = "UPDATE press_releases SET title = ?, date = ?, image_url = ?, content = ? WHERE id = ?";
    db.query(query, [title, date, image_url, content, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Press release updated successfully!" });
    });
});

app.delete('/api/press/:id', verifyToken, (req, res) => {
    db.query("DELETE FROM press_releases WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Press release deleted successfully!" });
    });
});

// --- GALLERY ROUTES ---
app.get('/api/gallery', (req, res) => {
    db.query("SELECT * FROM gallery ORDER BY created_at DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        const mapped = results.map(row => ({ ...row, title: row.category }));
        res.json(mapped);
    });
});

app.post('/api/gallery', verifyToken, (req, res) => {
    const { title, image_url, alt_text } = req.body;
    const query = "INSERT INTO gallery (category, image_url, alt_text) VALUES (?, ?, ?)";
    db.query(query, [title, image_url, alt_text || ""], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Gallery item added successfully!", id: result.insertId });
    });
});

app.put('/api/gallery/:id', verifyToken, (req, res) => {
    const { title, image_url } = req.body;
    const query = "UPDATE gallery SET category = ?, image_url = ? WHERE id = ?";
    db.query(query, [title, image_url, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Gallery item updated successfully!" });
    });
});

app.delete('/api/gallery/:id', verifyToken, (req, res) => {
    db.query("DELETE FROM gallery WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Gallery item deleted successfully!" });
    });
});

// --- DASHBOARD STATS ROUTE ---
app.get('/api/dashboard-stats', (req, res) => {
    const queries = {
        blogs: "SELECT COUNT(*) as count FROM blogs",
        press: "SELECT COUNT(*) as count FROM press_releases",
        gallery: "SELECT COUNT(*) as count FROM gallery"
    };

    const results = {};
    let completed = 0;
    const total = Object.keys(queries).length;

    Object.keys(queries).forEach(key => {
        db.query(queries[key], (err, result) => {
            if (err) {
                results[key] = 0;
            } else {
                results[key] = result[0].count;
            }
            completed++;
            if (completed === total) {
                res.json(results);
            }
        });
    });
});

// TEST ROUTE
app.get('/', (req, res) => {
    res.send("Nivara Backend Server is Running!");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
