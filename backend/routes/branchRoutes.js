const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');
const { verifyToken } = require('../middleware/auth');
const { validateId, validateBranch } = require('../middleware/validation');

router.get('/branches', branchController.getBranches);
router.post('/branches', verifyToken, validateBranch, branchController.createBranch);
router.put('/branches/:id', verifyToken, validateId, validateBranch, branchController.updateBranch);
router.delete('/branches/:id', verifyToken, validateId, branchController.deleteBranch);

module.exports = router;
