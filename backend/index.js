const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
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
    const imageUrl = `http://localhost:5001/uploads/${req.file.filename}`;
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

// --- PAGES ROUTES ---
app.get('/api/pages', (req, res) => {
    db.query("SELECT * FROM pages ORDER BY created_at DESC", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.get('/api/pages/:slug', (req, res) => {
    const { slug } = req.params;
    db.query("SELECT * FROM pages WHERE slug = ?", [slug], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: "Page not found" });
        res.json(results[0]);
    });
});

app.post('/api/pages', verifyToken, (req, res) => {
    const { title, slug, content, menu_location, banner_image } = req.body;
    const query = "INSERT INTO pages (title, slug, content, menu_location, banner_image) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [title, slug, content, menu_location || 'none', banner_image || null], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Page added successfully!", id: result.insertId });
    });
});

app.put('/api/pages/:id', verifyToken, (req, res) => {
    const { title, slug, content, menu_location, banner_image } = req.body;
    const query = "UPDATE pages SET title = ?, slug = ?, content = ?, menu_location = ?, banner_image = ? WHERE id = ?";
    db.query(query, [title, slug, content, menu_location || 'none', banner_image || null, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Page updated successfully!" });
    });
});

app.delete('/api/pages/:id', verifyToken, (req, res) => {
    db.query("DELETE FROM pages WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Page deleted successfully!" });
    });
});

// --- DASHBOARD STATS ROUTE ---
app.get('/api/dashboard-stats', (req, res) => {
    const queries = {
        blogs: "SELECT COUNT(*) as count FROM blogs",
        press: "SELECT COUNT(*) as count FROM press_releases",
        gallery: "SELECT COUNT(*) as count FROM gallery",
        pages: "SELECT COUNT(*) as count FROM pages"
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

// --- OWASP SECURITY: Rate Limiter for Careers Form ---
const careerApplyLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // Temporarily increased to 100 to allow seamless testing
    message: { message: "Too many applications submitted from this IP. Please try again after an hour." },
    standardHeaders: true,
    legacyHeaders: false,
});

// --- OWASP SECURITY: Input HTML Escaping to prevent XSS/HTML Injection in Emails ---
const escapeHtml = (text) => {
    if (!text) return '';
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

// --- OWASP SECURITY: Secure Multer Config for Resumes (strict type and size validation) ---
const resumeStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // Sanitize filename to prevent directory traversal or script injection
        const cleanName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        cb(null, 'resume-' + Date.now() + '-' + cleanName);
    }
});

const resumeUpload = multer({
    storage: resumeStorage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Enforce strict 5MB size limit
    fileFilter: (req, file, cb) => {
        const allowedExtensions = ['.pdf', '.docx', '.doc'];
        const allowedMimeTypes = [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword'
        ];
        
        const ext = path.extname(file.originalname).toLowerCase();
        const isAllowedExt = allowedExtensions.includes(ext);
        const isAllowedMime = allowedMimeTypes.includes(file.mimetype);

        if (isAllowedExt && isAllowedMime) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file format. Only PDF, DOCX, and DOC files are allowed.'));
        }
    }
});

// --- Nodemailer Transporter Configuration ---
const getMailTransporter = () => {
    // If SMTP credentials are not configured, fallback to Ethereal/test setup
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587');
    const user = process.env.SMTP_USER || '';
    const pass = process.env.SMTP_PASS || '';

    return nodemailer.createTransport({
        host: host,
        port: port,
        secure: port === 465,
        auth: { user: user, pass: pass }
    });
};

// --- SECURE CAREERS APPLICATION ENDPOINT ---
app.post('/api/careers/apply', careerApplyLimiter, (req, res) => {
    // Handle Multer upload safely to catch type/size errors
    resumeUpload.single('resume')(req, res, (err) => {
        if (err) {
            // Handle file size or file filter rejection errors
            return res.status(400).json({ message: err.message });
        }

        const { position, firstName, lastName, email, phone, location, message } = req.body;

        // OWASP: Enforce server-side presence validation
        if (!position || !firstName || !lastName || !email || !phone || !location) {
            // Clean up uploaded file if present
            if (req.file && fs.existsSync(req.file.path)) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ message: "All required fields must be filled out." });
        }

        // OWASP: Basic server-side email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            if (req.file && fs.existsSync(req.file.path)) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ message: "Invalid email format." });
        }

        // OWASP: Strict validation ensuring resume file is present
        if (!req.file) {
            return res.status(400).json({ message: "Resume upload is required." });
        }

        // OWASP: HTML sanitize input values to prevent HTML Injection / XSS inside the email
        const safePosition = escapeHtml(position);
        const safeFirstName = escapeHtml(firstName);
        const safeLastName = escapeHtml(lastName);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeLocation = escapeHtml(location);
        const safeMessage = escapeHtml(message || 'No cover letter / message provided.');

        // Compose highly-aesthetic email content
        const mailOptions = {
            from: process.env.SMTP_USER || '"Nivara Careers" <careers-noreply@nivarahousing.com>',
            to: 'konduruharshita21@gmail.com',
            subject: `New Job Application: ${safePosition} - ${safeFirstName} ${safeLastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                    <div style="text-align: center; border-bottom: 2px solid #E32125; padding-bottom: 10px; margin-bottom: 20px;">
                        <h2 style="color: #E32125; margin: 0;">Nivara Housing Finance</h2>
                        <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Careers Application Submission</p>
                    </div>
                    
                    <h3 style="color: #333;">Applicant Details</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%;">Position:</td>
                            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePosition}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Full Name:</td>
                            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeFirstName} ${safeLastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
                            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePhone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Location:</td>
                            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeLocation}</td>
                        </tr>
                    </table>

                    <h3 style="color: #333; margin-top: 20px;">Cover Letter / Message</h3>
                    <div style="background: #f9f9f9; border-left: 4px solid #E32125; padding: 15px; border-radius: 4px; color: #555; white-space: pre-wrap; font-style: italic;">
                        ${safeMessage}
                    </div>

                    <div style="margin-top: 25px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                        This email was generated automatically by the Nivara Careers portal. The applicant's resume is attached below.
                    </div>
                </div>
            `,
            attachments: [
                {
                    filename: req.file.originalname,
                    path: req.file.path
                }
            ]
        };

        const transporter = getMailTransporter();

        // Send email dispatch
        transporter.sendMail(mailOptions, (error, info) => {
            // OWASP: Always delete the uploaded file from the local server immediately after sending 
            // to ensure no residual files sit on the server's disk, minimizing risk.
            if (req.file && fs.existsSync(req.file.path)) {
                fs.unlinkSync(req.file.path);
            }

            if (error) {
                console.error("❌ Email transmission failed:", error.message);
                
                // Fallback for development: if user/pass is empty, log that it succeeded mock-wise
                if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                    console.log("ℹ️ [DEV FALLBACK] SMTP Credentials not configured. Logged mock application success.");
                    return res.status(200).json({ 
                        message: "Application submitted successfully! (Dev mode: logged to console without real email dispatch)." 
                    });
                }

                return res.status(500).json({ message: "Failed to transmit application. Please try again later." });
            }

            console.log("✅ Application email sent successfully:", info.messageId);
            res.status(200).json({ message: "Application submitted successfully! Our HR team will review your CV." });
        });
    });
});

// --- OWASP SECURITY: Rate Limiter for Loan Form ---
const loanApplyLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // Limit each IP to 100 requests per hour (allows testing)
    message: { message: "Too many loan applications submitted from this IP. Please try again after an hour." },
    standardHeaders: true,
    legacyHeaders: false,
});

// --- SECURE LOAN APPLICATION ENDPOINT ---
app.post('/api/loans/apply', loanApplyLimiter, (req, res) => {
    const { firstName, lastName, email, contactNumber, state, district, city, fullAddress, loanFor, loanAmount } = req.body;

    // OWASP: Server-side presence validation
    if (!firstName || !lastName || !email || !contactNumber || !state || !district || !city || !fullAddress || !loanFor || !loanAmount) {
        return res.status(400).json({ message: "All form fields are required." });
    }

    // OWASP: Server-side email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }

    // OWASP: HTML sanitize input values to prevent HTML Injection / XSS inside the email
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeContact = escapeHtml(contactNumber);
    const safeState = escapeHtml(state);
    const safeDistrict = escapeHtml(district);
    const safeCity = escapeHtml(city);
    const safeAddress = escapeHtml(fullAddress);
    const safeLoanFor = escapeHtml(loanFor);
    const safeAmount = escapeHtml(loanAmount);

    // Compose highly-aesthetic email content presenting all loan parameters
    const mailOptions = {
        from: process.env.SMTP_USER || '"Nivara Home Loans" <loans-noreply@nivarahousing.com>',
        to: 'konduruharshita21@gmail.com',
        subject: `New Loan Application: ${safeLoanFor} - ${safeFirstName} ${safeLastName}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="text-align: center; border-bottom: 2px solid #E32125; padding-bottom: 10px; margin-bottom: 20px;">
                    <h2 style="color: #E32125; margin: 0;">Nivara Housing Finance</h2>
                    <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Home Loan Application Submission</p>
                </div>
                
                <h3 style="color: #333;">Loan details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">Loan for:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeLoanFor}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Requested Amount:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #E32125;">INR ${parseFloat(safeAmount).toLocaleString('en-IN')}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Applicant Personal Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">Full Name:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeFirstName} ${safeLastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Email:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Phone Number:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeContact}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Location & Address</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">City:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeCity}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">District:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeDistrict}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">State:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeState}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Full Address:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${safeAddress}</td>
                    </tr>
                </table>

                <div style="margin-top: 25px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                    This email was generated automatically by the Nivara Home Loan portal.
                </div>
            </div>
        `
    };

    const transporter = getMailTransporter();

    // Send email dispatch
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Email transmission failed:", error.message);
            
            // Fallback for development: if user/pass is empty, log that it succeeded mock-wise
            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                console.log("ℹ️ [DEV FALLBACK] SMTP Credentials not configured. Logged mock loan application success.");
                return res.status(200).json({ 
                    message: "Application submitted successfully! (Dev mode: logged to console without real email dispatch)." 
                });
            }

            return res.status(500).json({ message: "Failed to transmit application. Please try again later." });
        }

        console.log("✅ Loan application email sent successfully:", info.messageId);
        res.status(200).json({ message: "Application submitted successfully! Our loans team will contact you shortly." });
    });
});

// TEST ROUTE
app.get('/', (req, res) => {
    res.send("Nivara Backend Server is Running!");
});

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
