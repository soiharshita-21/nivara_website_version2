const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const { verifyToken } = require('../middleware/auth');
const { validateId, validateGalleryItem } = require('../middleware/validation');

router.get('/gallery', galleryController.getGallery);
router.post('/gallery', verifyToken, galleryController.createGalleryItem);
router.put('/gallery/folder', verifyToken, galleryController.updateGalleryFolder);
router.put('/gallery/:id', verifyToken, validateId, validateGalleryItem, galleryController.updateGalleryItem);
router.delete('/gallery/folder/:category', verifyToken, galleryController.deleteGalleryFolder);
router.delete('/gallery/:id', verifyToken, validateId, galleryController.deleteGalleryItem);

module.exports = router;
