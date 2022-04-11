const express = require('express');
const router = express.Router();

const userRegister = require('../controllers/User');
const authentication = require('../controllers/Auth');

router.post('/login', authentication.login);

router.put('/register', userRegister.create);

module.exports = router;