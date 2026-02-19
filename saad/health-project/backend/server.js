const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
  const ip = req.ip;
  if (ip !== '::1' && ip !== '127.0.0.1') {
    const log = `External IP: ${ip} | URL: ${req.originalUrl} | Time: ${new Date().toISOString()}\n`;
    fs.appendFileSync(path.join(__dirname, 'server.log'), log);
    console.log(log);
  }
  next();
});

// ✅ Serve 'public' folder (NOT index.html directly!)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
