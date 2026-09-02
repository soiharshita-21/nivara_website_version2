const express = require('express');
const router = express.Router();
const popupController = require('../controllers/popupController');
const { verifyToken } = require('../middleware/auth');
const { validateId, validatePopup } = require('../middleware/validation');

// Public route to get active popups (no token required)
router.get('/popups/active', popupController.getActivePopups);

// Admin routes (require verifyToken)
router.get('/popups', verifyToken, popupController.getAllPopups);
router.get('/popups/:id', verifyToken, validateId, popupController.getPopupById);
router.post('/popups', verifyToken, validatePopup, popupController.createPopup);
router.put('/popups/:id', verifyToken, validateId, validatePopup, popupController.updatePopup);
router.patch('/popups/:id/toggle', verifyToken, validateId, popupController.togglePopupStatus);
router.delete('/popups/:id', verifyToken, validateId, popupController.deletePopup);

module.exports = router;
