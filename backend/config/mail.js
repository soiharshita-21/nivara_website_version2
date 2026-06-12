const nodemailer = require('nodemailer');
require('dotenv').config();

const getMailTransporter = () => {
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587');
    const user = process.env.SMTP_USER || '';
    const pass = process.env.SMTP_PASS || '';

    return nodemailer.createTransport({
        host: host,
        port: port,
        secure: port === 465,
        auth: { user: user, pass: pass }
    });
};

module.exports = { getMailTransporter };
