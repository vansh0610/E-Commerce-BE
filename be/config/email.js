const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log("❌ Email connection failed:", error);
    } else {
        console.log("✅ Email server is ready to send messages");
    }
});

// Send email function
const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        });
        console.log(`📧 Email sent to ${to}`);
    } catch (err) {
        console.error("❌ Error sending email:", err);
    }
};


module.exports = sendEmail; // export the function
