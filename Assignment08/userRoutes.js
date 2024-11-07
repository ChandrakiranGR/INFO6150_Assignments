const express = require('express');
const userController = require('./userController');
const router = express.Router();

router.post('/create', userController.createUser);
router.put('/edit', userController.updateUser);
router.delete('/delete', userController.deleteUser);
router.get('/getAll', userController.getAllUsers);
router.post('/uploadImage', userController.uploadImage);

module.exports = router;
