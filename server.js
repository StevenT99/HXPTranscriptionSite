require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// API route for token
app.get("/token", (req, res) => {
  res.json({ token: process.env.ASSEMBLYAI_API_KEY || "MISSING_API_KEY" });
});

// Serve index.html for any unknown route (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
