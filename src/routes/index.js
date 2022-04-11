const express = require('express');
const router = express.Router();
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const blogRoutes = require('./blog.routes');

// auth routes
router.use('/auth', authRoutes);

// user routes
router.use('/user', userRoutes);

// blog routes
router.use('/blog', blogRoutes);

module.exports = router;