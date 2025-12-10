const nodemailer = require("nodemailer");

const sendNotificationEmail = async (name, phone, email, message) => {
  try {
    // === BREVO SMTP TRANSPORTER ===
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,     // smtp-relay.brevo.com
      port: process.env.SMTP_PORT,     // 587
      secure: false,                   // Always false for Brevo
      auth: {
        user: process.env.SMTP_USER,   // Your Brevo login email
        pass: process.env.SMTP_PASS    // Your SMTP Key
      }
    });

    const mailOptions = {
      from: process.env.SMTP_USER,     // Brevo account email
      to: process.env.EMAIL_TO,        // Where YOU want notifications
      subject: "New Inquiry - Uday Hydraulics",
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p style="font-size:12px;color:#555;">
          This email was sent automatically using Brevo SMTP.
        </p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("Email Sent ✔✔✔");

  } catch (err) {
    console.log("Email Error:", err);
  }
};

module.exports = sendNotificationEmail;
