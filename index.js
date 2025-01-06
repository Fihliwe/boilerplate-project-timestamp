// index.js
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Enable CORS for all requests
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files from 'public' directory
app.use(express.static('public'));

// Root endpoint - serve index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint - handle date parameter
app.get('/api/:date?', function (req, res) {
  let date;
  const dateParam = req.params.date;

  // Handle empty date parameter - return current time
  if (!dateParam) {
    date = new Date();
    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }

  // Handle Unix timestamp (milliseconds)
  if (/^\d+$/.test(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else {
    // Handle date string
    date = new Date(dateParam);
  }

  // Check if date is valid
  if (date.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  // Return successful response
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Listen on port specified in environment or 3000
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});