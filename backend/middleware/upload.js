const multer = require('multer');
const path = require('path');

// General storage config for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Secure Multer configuration for resumes
const resumeStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destDir = 'uploads/';
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        cb(null, destDir);
    },
    filename: (req, file, cb) => {
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

const fs = require('fs');

// Dedicated Multer configuration for documents/PDFs
const documentStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destDir = path.join('uploads', 'documents');
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        cb(null, destDir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const baseName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9.\-_]/g, '_');
        cb(null, `doc-${Date.now()}-${baseName}${ext}`);
    }
});

const documentUpload = multer({
    storage: documentStorage,
    limits: { fileSize: 35 * 1024 * 1024 }, // 35MB limit to accommodate larger regulatory reports
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        if (ext === '.pdf' || file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Invalid file format. Only PDF files are allowed.'));
        }
    }
});

module.exports = {
    upload,
    resumeUpload,
    documentUpload
};

