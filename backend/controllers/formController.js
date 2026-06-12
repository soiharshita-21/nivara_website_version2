const fs = require('fs');
const { getMailTransporter } = require('../config/mail');
const { escapeHtml } = require('../middleware/validation');

const applyCareer = (req, res) => {
    const { position, firstName, lastName, email, phone, location, message } = req.body;

    if (!position || !firstName || !lastName || !email || !phone || !location) {
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        return res.status(400).json({ message: "All required fields must be filled out." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        return res.status(400).json({ message: "Invalid email format." });
    }

    if (!req.file) {
        return res.status(400).json({ message: "Resume upload is required." });
    }

    const safePosition = escapeHtml(position);
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeLocation = escapeHtml(location);
    const safeMessage = escapeHtml(message || 'No cover letter / message provided.');

    const mailOptions = {
        from: process.env.SMTP_USER || '"Nivara Careers" <careers-noreply@nivarahousing.com>',
        to: 'konduruharshita21@gmail.com',
        subject: `New Job Application: ${safePosition} - ${safeFirstName} ${safeLastName}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="text-align: center; border-bottom: 2px solid #B3191F; padding-bottom: 10px; margin-bottom: 20px;">
                    <h2 style="color: #B3191F; margin: 0;">Nivara Housing Finance</h2>
                    <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Careers Application Submission</p>
                </div>
                
                <h3 style="color: #333;">Applicant Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%;">Position:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePosition}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Full Name:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeFirstName} ${safeLastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePhone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Location:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeLocation}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 20px;">Cover Letter / Message</h3>
                <div style="background: #f9f9f9; border-left: 4px solid #B3191F; padding: 15px; border-radius: 4px; color: #555; white-space: pre-wrap; font-style: italic;">
                    ${safeMessage}
                </div>

                <div style="margin-top: 25px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                    This email was generated automatically by the Nivara Careers portal. The applicant's resume is attached below.
                </div>
            </div>
        `,
        attachments: [
            {
                filename: req.file.originalname,
                path: req.file.path
            }
        ]
    };

    const transporter = getMailTransporter();

    transporter.sendMail(mailOptions, (error, info) => {
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        if (error) {
            console.error("❌ Email transmission failed:", error.message);
            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                console.log("ℹ️ [DEV FALLBACK] SMTP Credentials not configured. Logged mock application success.");
                return res.status(200).json({ 
                    message: "Application submitted successfully! (Dev mode: logged to console without real email dispatch)." 
                });
            }
            return res.status(500).json({ message: "Failed to transmit application. Please try again later." });
        }

        console.log("✅ Application email sent successfully:", info.messageId);
        res.status(200).json({ message: "Application submitted successfully! Our HR team will review your CV." });
    });
};

const applyLoan = (req, res) => {
    const { firstName, lastName, email, contactNumber, state, district, city, fullAddress, loanFor, loanAmount } = req.body;

    if (!firstName || !lastName || !email || !contactNumber || !state || !district || !city || !fullAddress || !loanFor || !loanAmount) {
        return res.status(400).json({ message: "All form fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeContact = escapeHtml(contactNumber);
    const safeState = escapeHtml(state);
    const safeDistrict = escapeHtml(district);
    const safeCity = escapeHtml(city);
    const safeAddress = escapeHtml(fullAddress);
    const safeLoanFor = escapeHtml(loanFor);
    const safeAmount = escapeHtml(loanAmount);

    const mailOptions = {
        from: process.env.SMTP_USER || '"Nivara Home Loans" <loans-noreply@nivarahousing.com>',
        to: 'konduruharshita21@gmail.com',
        subject: `New Loan Application: ${safeLoanFor} - ${safeFirstName} ${safeLastName}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="text-align: center; border-bottom: 2px solid #B3191F; padding-bottom: 10px; margin-bottom: 20px;">
                    <h2 style="color: #B3191F; margin: 0;">Nivara Housing Finance</h2>
                    <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Home Loan Application Submission</p>
                </div>
                
                <h3 style="color: #333;">Loan details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">Loan for:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeLoanFor}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Requested Amount:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #B3191F;">INR ${parseFloat(safeAmount).toLocaleString('en-IN')}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Applicant Personal Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">Full Name:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeFirstName} ${safeLastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Email:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Phone Number:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeContact}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Location & Address</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">City:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeCity}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">District:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeDistrict}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">State:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeState}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Full Address:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${safeAddress}</td>
                    </tr>
                </table>

                <div style="margin-top: 25px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                    This email was generated automatically by the Nivara Home Loan portal.
                </div>
            </div>
        `
    };

    const transporter = getMailTransporter();

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Email transmission failed:", error.message);
            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                console.log("ℹ️ [DEV FALLBACK] SMTP Credentials not configured. Logged mock loan application success.");
                return res.status(200).json({ 
                    message: "Application submitted successfully! (Dev mode: logged to console without real email dispatch)." 
                });
            }
            return res.status(500).json({ message: "Failed to transmit application. Please try again later." });
        }

        console.log("✅ Loan application email sent successfully:", info.messageId);
        res.status(200).json({ message: "Application submitted successfully! Our loans team will contact you shortly." });
    });
};

const applyAppointment = (req, res) => {
    const { firstName, lastName, email, contactNumber, state, district, city, fullAddress, loanFor, loanAmount } = req.body;

    if (!firstName || !lastName || !email || !contactNumber || !state || !district || !city || !fullAddress || !loanFor || !loanAmount) {
        return res.status(400).json({ message: "All form fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeContact = escapeHtml(contactNumber);
    const safeState = escapeHtml(state);
    const safeDistrict = escapeHtml(district);
    const safeCity = escapeHtml(city);
    const safeAddress = escapeHtml(fullAddress);
    const safeLoanFor = escapeHtml(loanFor);
    const safeAmount = escapeHtml(loanAmount);

    const mailOptions = {
        from: process.env.SMTP_USER || '"Nivara Home Loans" <loans-noreply@nivarahousing.com>',
        to: 'konduruharshita21@gmail.com',
        subject: `New Appointment Request: ${safeLoanFor} - ${safeFirstName} ${safeLastName}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="text-align: center; border-bottom: 2px solid #B3191F; padding-bottom: 10px; margin-bottom: 20px;">
                    <h2 style="color: #B3191F; margin: 0;">Nivara Housing Finance</h2>
                    <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Appointment Request Submission</p>
                </div>
                
                <h3 style="color: #333;">Loan Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">Loan for:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeLoanFor}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Requested Amount:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #B3191F;">INR ${parseFloat(safeAmount).toLocaleString('en-IN')}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Applicant Contact Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">Full Name:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeFirstName} ${safeLastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Email:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Phone Number:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeContact}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Location & Address</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">City:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeCity}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">District:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeDistrict}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">State:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeState}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Full Address:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${safeAddress}</td>
                    </tr>
                </table>

                <div style="margin-top: 25px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                    This email was generated automatically by the Nivara Home Loan portal.
                </div>
            </div>
        `
    };

    const transporter = getMailTransporter();

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Appointment Email transmission failed:", error.message);
            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                console.log("ℹ️ [DEV FALLBACK] SMTP Credentials not configured. Logged mock appointment request success.");
                return res.status(200).json({ 
                    message: "Appointment request submitted successfully! (Dev mode: logged to console without real email dispatch)." 
                });
            }
            return res.status(500).json({ message: "Failed to submit appointment request. Please try again later." });
        }

        console.log("✅ Appointment request email sent successfully:", info.messageId);
        res.status(200).json({ message: "Appointment request submitted successfully! Our team will contact you shortly." });
    });
};

const applyContact = (req, res) => {
    const { name, email, phone, location, message } = req.body;

    if (!name || !email || !phone || !location || !message) {
        return res.status(400).json({ message: "All form fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeLocation = escapeHtml(location);
    const safeMessage = escapeHtml(message);

    const mailOptions = {
        from: process.env.SMTP_USER || '"Nivara Home Loans" <loans-noreply@nivarahousing.com>',
        to: 'konduruharshita21@gmail.com',
        subject: `New General Contact Inquiry from ${safeName}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="text-align: center; border-bottom: 2px solid #B3191F; padding-bottom: 10px; margin-bottom: 20px;">
                    <h2 style="color: #B3191F; margin: 0;">Nivara Housing Finance</h2>
                    <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Contact Inquiry Submitted</p>
                </div>
                
                <h3 style="color: #333;">Inquirer Profile</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">Full Name:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Email:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Phone Number:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePhone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Location:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeLocation}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Message / Inquiry Details</h3>
                <div style="padding: 12px; background: #fdfdfd; border: 1px solid #eee; border-radius: 6px; white-space: pre-wrap;">${safeMessage}</div>

                <div style="margin-top: 25px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                    This email was generated automatically by the Nivara Home Loan portal.
                </div>
            </div>
        `
    };

    const transporter = getMailTransporter();

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Contact Email transmission failed:", error.message);
            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                console.log("ℹ️ [DEV FALLBACK] SMTP Credentials not configured. Logged mock contact inquiry success.");
                return res.status(200).json({ 
                    message: "Inquiry sent successfully! (Dev mode: logged to console without real email dispatch)." 
                });
            }
            return res.status(500).json({ message: "Failed to send contact inquiry. Please try again later." });
        }

        console.log("✅ Contact inquiry email sent successfully:", info.messageId);
        res.status(200).json({ message: "Your inquiry has been sent successfully! We will get back to you shortly." });
    });
};

const applyAdvisor = (req, res) => {
    const { name, email, phone, location, message } = req.body;

    if (!name || !email || !phone || !location || !message) {
        return res.status(400).json({ message: "All form fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeLocation = escapeHtml(location);
    const safeMessage = escapeHtml(message);

    const mailOptions = {
        from: process.env.SMTP_USER || '"Nivara Home Loans" <loans-noreply@nivarahousing.com>',
        to: 'konduruharshita21@gmail.com',
        subject: `New Advisor Request from ${safeName}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="text-align: center; border-bottom: 2px solid #B3191F; padding-bottom: 10px; margin-bottom: 20px;">
                    <h2 style="color: #B3191F; margin: 0;">Nivara Housing Finance</h2>
                    <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Advisor Consultation Request</p>
                </div>
                
                <h3 style="color: #333;">Request Profile</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 35%; background: #fdfdfd;">Full Name:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Email:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Phone Number:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePhone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Location:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeLocation}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Loan Queries & Message</h3>
                <div style="padding: 12px; background: #fdfdfd; border: 1px solid #eee; border-radius: 6px; white-space: pre-wrap;">${safeMessage}</div>

                <div style="margin-top: 25px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                    This email was generated automatically by the Nivara Home Loan portal.
                </div>
            </div>
        `
    };

    const transporter = getMailTransporter();

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Advisor Email transmission failed:", error.message);
            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                console.log("ℹ️ [DEV FALLBACK] SMTP Credentials not configured. Logged mock advisor request success.");
                return res.status(200).json({ 
                    message: "Advisor consultation request submitted successfully! (Dev mode: logged to console without real email dispatch)." 
                });
            }
            return res.status(500).json({ message: "Failed to submit request. Please try again later." });
        }

        console.log("✅ Advisor request email sent successfully:", info.messageId);
        res.status(200).json({ message: "Advisor request submitted successfully! A loan expert will contact you shortly." });
    });
};

const applyQuote = (req, res) => {
    const { fullName, email, contactNumber, state, city, preferredDate, loanAmount } = req.body;

    if (!fullName || !email || !contactNumber || !state || !city || !preferredDate || !loanAmount) {
        return res.status(400).json({ message: "All form fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeContact = escapeHtml(contactNumber);
    const safeState = escapeHtml(state);
    const safeCity = escapeHtml(city);
    const safePreferredDate = escapeHtml(preferredDate);
    const safeAmount = escapeHtml(loanAmount);

    const mailOptions = {
        from: process.env.SMTP_USER || '"Nivara Quote Requests" <quotes-noreply@nivarahousing.com>',
        to: 'konduruharshita21@gmail.com',
        subject: `New Quote Request: ${safeFullName} - INR ${parseFloat(safeAmount).toLocaleString('en-IN')}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <div style="text-align: center; border-bottom: 2px solid #B3191F; padding-bottom: 10px; margin-bottom: 20px;">
                    <h2 style="color: #B3191F; margin: 0;">Nivara Housing Finance</h2>
                    <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Quote Request Submission</p>
                </div>
                
                <h3 style="color: #333;">Request Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 40%; background: #fdfdfd;">Full Name:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeFullName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Email Address:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Contact Number:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeContact}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">State:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeState}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">City:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeCity}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Preferred Date:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePreferredDate}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; background: #fdfdfd;">Loan Amount Required:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #B3191F;">INR ${parseFloat(safeAmount).toLocaleString('en-IN')}</td>
                    </tr>
                </table>

                <div style="margin-top: 25px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                    This email was generated automatically by the Nivara Quote Request portal.
                </div>
            </div>
        `
    };

    const transporter = getMailTransporter();

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Email transmission failed:", error.message);
            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
                console.log("ℹ️ [DEV FALLBACK] SMTP Credentials not configured. Logged mock quote request success.");
                return res.status(200).json({ 
                    message: "Quote request submitted successfully! (Dev mode: logged to console without real email dispatch)." 
                });
            }
            return res.status(500).json({ message: "Failed to transmit quote request. Please try again later." });
        }

        console.log("✅ Quote request email sent successfully:", info.messageId);
        res.status(200).json({ message: "Quote request submitted successfully! Our experts will get back to you shortly." });
    });
};

module.exports = {
    applyCareer,
    applyLoan,
    applyAppointment,
    applyContact,
    applyAdvisor,
    applyQuote
};
