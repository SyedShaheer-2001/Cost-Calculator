require("dotenv").config(); 
const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
 app.use(cors());

// Configure Multer to handle file upload
const upload = multer({ storage: multer.memoryStorage() });

// Nodemailer transporter setup (use real credentials or OAuth for production)
const transporter = nodemailer.createTransport({
   host: "mail.appcostcalculator.ca",
  port: 465,
  secure: true, // true for port 465 (SSL)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // load from env
  },
});

app.post("/send-estimate", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file || !req.body.name || !req.body.email) {
      console.error("Missing fields:", req.body, req.file);
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("Name:", req.body.name);
    console.log("Email:", req.body.email);
    console.log("PDF size:", req.file.buffer.length);

    const mailOptions = {
      from: "info@appcostcalculator.ca",
      to: req.body.email,
      subject: `Your Estimate, ${req.body.name}`,
      text: `Hi ${req.body.name},\n\nAttached is the estimate for your app.`,
      attachments: [
        {
          filename: `${req.body.name}_estimate.pdf`,
          content: req.file.buffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
