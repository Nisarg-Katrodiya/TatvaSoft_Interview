const express = require('express');
const router = express.Router();
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

// auth routes
router.use('/auth', authRoutes);
// user routes
router.use('/user', userRoutes);

module.exports = router;