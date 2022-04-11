const express = require('express');
const router = express.Router();

const userRegister = require('../controllers/User');

router.post('/create', userRegister.create);

router.put('/update', userRegister.update);

router.get('/get-all', userRegister.getAll);

router.get('/get-one/:id', userRegister.getOne);

router.get('/delete', userRegister.delete);

module.exports = router;