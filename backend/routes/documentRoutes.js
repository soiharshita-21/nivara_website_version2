const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const { verifyToken } = require('../middleware/auth');
const { documentUpload } = require('../middleware/upload');

// Public route to fetch documents for any page
router.get('/documents', documentController.getDocuments);

// Protected admin routes
router.post('/documents', verifyToken, documentUpload.single('file'), documentController.createDocument);
router.put('/documents/:id', verifyToken, documentUpload.single('file'), documentController.updateDocument);
router.delete('/documents/:id', verifyToken, documentController.deleteDocument);

module.exports = router;
