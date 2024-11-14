const express = require('express');
const router = express.Router();
const { loginUser } = require('../controller/userController');

router.post('/login', loginUser);

// Mock route for company images (static for now)
router.get('/company-images', (req, res) => {
  const images = [
    { name: "Company 1", imageUrl: "http://localhost:5001/images/sample.jpg" },
    // add more images as needed
  ];
  res.json(images);
});

module.exports = router;
