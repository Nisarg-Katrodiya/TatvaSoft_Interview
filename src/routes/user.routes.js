const express = require('express');
const router = express.Router();

const userController = require('../controllers/User');
const {auth} = require('../middleware/auth.mdl')

router.post('/create', userController.create);

router.put('/update/:id', auth, userController.update);

router.get('/get-all', userController.getAll);

router.get('/get-one/:id', userController.getOne);

router.delete('/delete/:id', auth, userController.delete);

module.exports = router;