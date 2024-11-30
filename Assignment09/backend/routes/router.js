const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const companyController = require('../controllers/companyController');
const jobController = require('../controllers/jobController');

// User routes
router.post('/login', userController.loginUser);
router.post('/create', userController.createUser);
router.get('/users', userController.getAllUsers);
// Company routes
router.get('/companies', companyController.getCompanies);
router.post('/companies/upload', companyController.uploadCompany);
// Job routes
router.post('/create/job', jobController.createJob);
router.get('/get/jobs', jobController.getJobs);

module.exports = router;
