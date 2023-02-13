const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

//Protect Routes
exports.protect = asyncHandler(async (req, res, next) => {
    let token;
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Bearer')) {
        token = authorization.split('')[1];
    } else if (req.cookies.token) {
        token = req.cookies.token;
    }
    
    //Make Sure token exists
    if (!token) {
        return next(new ErrorResponse('Not Authorized to access this route ', 401));
    }
    try {
        //Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decoded);

        req.user = await User.findById(decoded.id);

        next();
    } catch (err) {
        return next(new ErrorResponse('Not Authorized to access this route ', 401));
    }
});
