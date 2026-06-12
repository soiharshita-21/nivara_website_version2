const express = require('express');
const router = express.Router();
const pressController = require('../controllers/pressController');
const { verifyToken } = require('../middleware/auth');
const { validateId, validatePressRelease } = require('../middleware/validation');

router.get('/press', pressController.getPressReleases);
router.post('/press', verifyToken, validatePressRelease, pressController.createPressRelease);
router.put('/press/:id', verifyToken, validateId, validatePressRelease, pressController.updatePressRelease);
router.delete('/press/:id', verifyToken, validateId, pressController.deletePressRelease);

module.exports = router;
