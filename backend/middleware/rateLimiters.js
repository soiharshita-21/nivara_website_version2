const rateLimit = require('express-rate-limit');

// General API Rate Limiter
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // Limit each IP to 200 requests per 15 minutes
    message: { message: "Too many requests from this IP. Please try again after 15 minutes." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Auth Login Rate Limiter
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 login attempts per 15 minutes
    message: { message: "Too many login attempts. Please try again after 15 minutes." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Careers Form Rate Limiter
const careerApplyLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100,
    message: { message: "Too many applications submitted from this IP. Please try again after an hour." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Loan Form Rate Limiter
const loanApplyLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100,
    message: { message: "Too many loan applications submitted from this IP. Please try again after an hour." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Appointment Form Rate Limiter
const appointmentApplyLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100,
    message: { message: "Too many appointment requests from this IP. Please try again after an hour." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Contact Form Rate Limiter
const contactApplyLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100,
    message: { message: "Too many contact inquiries from this IP. Please try again after an hour." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Advisor Form Rate Limiter
const advisorApplyLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100,
    message: { message: "Too many advisor consultation requests from this IP. Please try again after an hour." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Quote Form Rate Limiter
const quoteApplyLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100,
    message: { message: "Too many quote requests submitted from this IP. Please try again after an hour." },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = {
    globalLimiter,
    loginLimiter,
    careerApplyLimiter,
    loanApplyLimiter,
    appointmentApplyLimiter,
    contactApplyLimiter,
    advisorApplyLimiter,
    quoteApplyLimiter
};
