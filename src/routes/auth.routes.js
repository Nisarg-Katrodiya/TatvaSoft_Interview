const express = require('express');
const router = express.Router();

const userController = require('../controllers/User');
const authentication = require('../controllers/Auth');

router.post('/login', authentication.login);

router.put('/register', userController.create);

module.exports = router;