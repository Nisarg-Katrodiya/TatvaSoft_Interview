const express = require('express');
const router = express.Router();

const blogController = require('../controllers/Blog');
const {auth} = require('../middleware/auth.mdl');

router.use(auth);

router.post('/create', blogController.create);

router.put('/update/:id', blogController.update);

router.get('/get-all', blogController.getAll);

router.get('/get-one/:id', blogController.getOne);

router.delete('/delete/:id', blogController.delete);

module.exports = router;