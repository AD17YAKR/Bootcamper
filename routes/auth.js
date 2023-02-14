const express = require('express');
const User = require('../models/User');
const { register, login, getMe } = require('../controllers/auth');

const router = express.Router();

const { protect } = require("../middlewares/auth");

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
