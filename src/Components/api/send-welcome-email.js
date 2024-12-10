const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Configure nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    // service: 'gmail',  // or your preferred email service
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.APP_PASSWORD,
    },
});

router.post('/send-welcome-email', async (req, res) => {
  const { email, name, subject } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: 'Welcome to DotTribe Africa!',
    html: getHtmlContent(email, name, subject, req.body.message),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Welcome email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending welcome email' });
  }
});

function getHtmlContent(email, name, subject, message) {
    const filePath = path.join(process.cwd(), '/public/welcomemail.html');
    let htmlContent = fs.readFileSync(filePath, 'utf8');
    htmlContent = htmlContent.replace('{{emailAddress}}', email);
    htmlContent = htmlContent.replace('{{subject}}', subject);
    htmlContent = htmlContent.replace('{{message}}', message);
    htmlContent = htmlContent.replace('{{name}}', name);
    return htmlContent;
}

module.exports = router;
