const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/auth");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend"))); // frontend serve

// MongoDB connect
connectDB();

// Routes
app.use("/", authRoutes);

// Server start
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});