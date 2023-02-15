const express = require('express');
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.js');

const User = require('../models/User');

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middlewares/auth');
const advanceResults = require('../middlewares/advanceResults');

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advanceResults(User), getUsers).post(createUser);

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
