const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const { verifyToken } = require('../middleware/auth');
const { upload } = require('../middleware/upload');

router.post('/upload', verifyToken, upload.single('image'), uploadController.uploadSingle);
router.post('/upload-multiple', verifyToken, upload.array('images', 50), uploadController.uploadMultiple);

module.exports = router;
