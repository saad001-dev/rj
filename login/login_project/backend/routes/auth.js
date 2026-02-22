const express = require("express");
const router = express.Router();
const User = require("../models/User");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");

// Gmail setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tumharaemail@gmail.com",         // tumhara Gmail
    pass: "16_char_app_password"           // Gmail app password
  }
});

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existUser = await User.findOne({ email });
    if (existUser) return res.json({ message: "Email already registered" });

    const token = uuidv4();
    const user = new User({
      email,
      password,
      verified: false,
      token
    });

    await user.save();

    const verifyLink = `http://localhost:5000/verify/${token}`;

    // Send email to user
    await transporter.sendMail({
      to: email, 
      subject: "Verify Your Account",
      html: `<h2>Welcome!</h2>
             <p>Please verify your email by clicking the link below:</p>
             <a href="${verifyLink}">Verify Email</a>`
    });

    res.json({ message: "Signup successful. Please check your email to verify." });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

// VERIFY
router.get("/verify/:token", async (req, res) => {
  try {
    const user = await User.findOne({ token: req.params.token });
    if (!user) return res.send("Invalid verification link");

    user.verified = true;
    await user.save();
    res.send("User verified successfully. You can now login.");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.json({ message: "User not found" });
    if (!user.verified) return res.json({ message: "Please verify your email first" });

    res.json({ message: "Login successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;