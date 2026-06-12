const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const { verifyToken } = require('../middleware/auth');
const { validateId, validatePage } = require('../middleware/validation');

router.get('/pages', pageController.getPages);
router.get('/pages/:slug', pageController.getPageBySlug);
router.post('/pages', verifyToken, validatePage, pageController.createPage);
router.put('/pages/:id', verifyToken, validateId, validatePage, pageController.updatePage);
router.delete('/pages/:id', verifyToken, validateId, pageController.deletePage);

module.exports = router;
