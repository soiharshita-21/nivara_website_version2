const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const { resumeUpload } = require('../middleware/upload');
const {
    careerApplyLimiter,
    loanApplyLimiter,
    appointmentApplyLimiter,
    contactApplyLimiter,
    advisorApplyLimiter,
    quoteApplyLimiter
} = require('../middleware/rateLimiters');

router.post('/careers/apply', careerApplyLimiter, formController.applyCareer);
router.post('/loans/apply', loanApplyLimiter, formController.applyLoan);
router.post('/appointments/apply', appointmentApplyLimiter, formController.applyAppointment);
router.post('/contacts/apply', contactApplyLimiter, formController.applyContact);
router.post('/advisors/apply', advisorApplyLimiter, formController.applyAdvisor);
router.post('/quotes/apply', quoteApplyLimiter, formController.applyQuote);

module.exports = router;
