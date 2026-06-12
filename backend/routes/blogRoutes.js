const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { verifyToken } = require('../middleware/auth');
const { validateId, validateBlog } = require('../middleware/validation');

router.get('/blogs', blogController.getBlogs);
router.get('/blogs/:slug', blogController.getBlogBySlug);
router.post('/blogs', verifyToken, validateBlog, blogController.createBlog);
router.put('/blogs/:id', verifyToken, validateId, validateBlog, blogController.updateBlog);
router.delete('/blogs/:id', verifyToken, validateId, blogController.deleteBlog);

module.exports = router;
