const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const { globalLimiter } = require('./middleware/rateLimiters');

// Import routers
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const blogRoutes = require('./routes/blogRoutes');
const pressRoutes = require('./routes/pressRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const pageRoutes = require('./routes/pageRoutes');
const branchRoutes = require('./routes/branchRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const formRoutes = require('./routes/formRoutes');
const popupRoutes = require('./routes/popupRoutes');
const documentRoutes = require('./routes/documentRoutes');

const app = express();

// Disable X-Powered-By header (OWASP A05:2021 - Security Misconfiguration)
app.disable('x-powered-by');

const allowedOrigins = [
    process.env.FRONTEND_URL
].filter(Boolean).map(url => url.trim());

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl, or postman)
        if (!origin) {
            callback(null, true);
            return;
        }

        // Check if origin is explicitly in the env whitelist
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }

        // Dynamically allow any localhost or 127.0.0.1 origin on any port
        try {
            const url = new URL(origin);
            if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
                callback(null, true);
                return;
            }
        } catch (e) {
            // Ignore URL parsing errors
        }

        callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));

app.use((req, res, next) => {
    console.log(`📡 [${new Date().toISOString()}] Incoming Request: ${req.method} ${req.url}`);
    next();
});

// OWASP Security HTTP Headers Middleware (OWASP A05:2021 - Security Misconfiguration)
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
});

// Set up folders for uploaded files and public documents
const uploadsDir = path.join(__dirname, 'uploads');
app.use('/uploads', (req, res, next) => {
    const reqFilename = path.basename(decodeURIComponent(req.path)).toLowerCase();
    if (!reqFilename) return next();
    const requestedPath = path.join(uploadsDir, decodeURIComponent(req.path));
    if (fs.existsSync(requestedPath)) {
        return next();
    }
    // Case-insensitive file fallback for cross-platform/Linux compatibility
    try {
        const files = fs.readdirSync(uploadsDir);
        const foundFile = files.find(f => f.toLowerCase() === reqFilename);
        if (foundFile) {
            return res.sendFile(path.join(uploadsDir, foundFile));
        }
    } catch (e) {
        // Fallback error handling
    }
    next();
}, express.static(uploadsDir));
app.use('/files', express.static(path.join(__dirname, '../frontend/public/files')));

// General API Rate Limiter
app.use(globalLimiter);

// Register API Routes
app.use('/api', authRoutes);
app.use('/api', uploadRoutes);
app.use('/api', blogRoutes);
app.use('/api', pressRoutes);
app.use('/api', galleryRoutes);
app.use('/api', pageRoutes);
app.use('/api', branchRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', formRoutes);
app.use('/api', popupRoutes);
app.use('/api', documentRoutes);

// TEST ROUTE
app.get('/', (req, res) => {
    res.send("Nivara Backend Server is Running!");
});

// --- GLOBAL UNHANDLED ERROR-HANDLING MIDDLEWARE ---
app.use((err, req, res, next) => {
    console.error("🔥 UNHANDLED ERROR IN BACKEND:", err);
    res.status(500).json({ 
        message: "Internal server error occurred.", 
        details: err.message,
        stack: err.stack 
    });
});

// Start the Server
if (require.main === module) {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
