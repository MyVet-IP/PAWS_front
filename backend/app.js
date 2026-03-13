// Backend Express App - No database required (in-memory storage)
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
const { errorHandler, notFound } = require('./middleware');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
const staticOptions = {
  etag: false,
  lastModified: false,
  setHeaders: res => res.setHeader('Cache-Control', 'no-store')
};
app.use(express.static(path.join(__dirname, '..'), staticOptions));
app.use(express.static(path.join(__dirname, '..', 'frontend'), staticOptions));

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true, message: 'API running', mode: 'in-memory' }));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/pets', require('./routes/pets'));
app.use('/api/businesses', require('./routes/businesses'));
app.use('/api/medical-records', require('./routes/medicalRecords'));
app.use('/api/emergencies', require('./routes/emergencies'));

// SPA fallback
app.get(/^\/(?!api)(?:[^.]*)?$/, (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'index.html'))
);

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Server startup with port retry
const http = require('http');

function startServer(port) {
  const currentPort = Number(port) || PORT;
  
  if (currentPort > 65535) {
    console.error('No available ports found');
    process.exit(1);
  }

  const server = http.createServer(app);

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${currentPort} busy, trying ${currentPort + 1}...`);
      setTimeout(() => startServer(currentPort + 1), 100);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });

  server.on('listening', () => {
    console.log(`\n========================================`);
    console.log(` VetCare Server Running`);
    console.log(` URL: http://localhost:${currentPort}`);
    console.log(` API: http://localhost:${currentPort}/api/health`);
    console.log(` Mode: In-Memory Storage`);
    console.log(`========================================\n`);
  });

  // Initialize DB then start listening
  db.initialize()
    .then(() => {
      server.listen(currentPort);
    })
    .catch(err => {
      console.error('DB init error:', err);
      // Start anyway with empty data
      server.listen(currentPort);
    });
}

// Graceful shutdown
process.on('SIGINT', () => { db.close(); process.exit(0); });
process.on('SIGTERM', () => { db.close(); process.exit(0); });

startServer(PORT);
module.exports = app;
