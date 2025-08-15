require("dotenv").config();
const express = require("express");
const { Resend } = require("resend");
const multer = require("multer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors({
  origin: '*', // Replace with your frontend origin in production
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

// Multer for file upload in memory
const upload = multer({ storage: multer.memoryStorage() });

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-estimate", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file || !req.body.name || !req.body.email) {
      console.error("Missing fields:", req.body, req.file);
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("Name:", req.body.name);
    console.log("Email:", req.body.email);
    console.log("PDF size:", req.file.buffer.length);

    // Send email via Resend API
    const response = await resend.emails.send({
      from: "info@appcostcalculator.ca", // must be a verified sender in Resend
      to: req.body.email,
      subject: `Your Estimate, ${req.body.name}`,
      text: `Hi ${req.body.name},\n\nAttached is the estimate for your app.`,
      attachments: [
        {
          filename: `${req.body.name}_estimate.pdf`,
          content: req.file.buffer.toString("base64"),
          type: "application/pdf",
        },
      ],
    });

    console.log("Email sent, ID:", response.id);
    res.status(200).json({ message: "Email sent!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
