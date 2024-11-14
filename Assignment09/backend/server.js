const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const router = require('./router/router');

const app = express();

// MongoDB Atlas connection string and JWT secret directly in code (for demo purposes only)
const MONGODB_URI = 'mongodb+srv://guthavarirameshc:Python25@info6150.qmw4n.mongodb.net/';
const JWT_SECRET = 'your_jwt_secret'; // You may use this directly in your code, like in controllers

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/images', express.static(path.join(__dirname, 'images')));

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(5001, () => console.log('Server running on port 5001'));
})
.catch((error) => console.error('MongoDB connection error:', error));

