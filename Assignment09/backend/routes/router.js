// routes/router.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const companyController = require('../controllers/companyController'); // Ensure this path is correct

// User routes
router.post('/login', userController.loginUser);

// Company routes
router.get('/companies', companyController.getCompanies); // Ensure getCompanies is defined
router.post('/companies/upload', companyController.uploadCompany); // Ensure uploadCompany is defined

module.exports = router;
