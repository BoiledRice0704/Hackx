const express = require('express');
const app = express();
require('dotenv').config();
const connectDatabase = require('./config/db');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDatabase()

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});