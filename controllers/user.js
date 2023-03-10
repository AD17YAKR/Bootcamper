const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const User = require('../models/User');

//@desc     Get All Users
//@routes   GET /api/v1/auth/users
//@access   Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advanceResults);
});

//@desc     Get Single Users
//@routes   GET /api/v1/auth/user/:id
//@access   Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({
        success: true,
        data: user
    });
});

//@desc     Create User
//@routes   POST /api/v1/auth/users
//@access   Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        data: user
    });
});

//@desc     Update User
//@routes   PUT /api/v1/auth/users/:id
//@access   Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(201).json({
        success: true,
        data: user
    });
});

//@desc     Delete User
//@routes   DELETE /api/v1/auth/users
//@access   Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
});
