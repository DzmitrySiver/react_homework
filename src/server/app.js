const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'app')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'app', 'index.html'));
});

module.exports = app;