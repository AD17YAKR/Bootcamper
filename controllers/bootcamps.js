const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Bootcamp = require('../models/Bootcamp');

//@desc     Get all Bootcamps
//@routes   GET /api/v1/bootcamps
//@access   Public

exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({
        success: true,
        count: bootcamp.length,
        data: bootcamp
    });
});

//@desc     Get Bootcamp by id
//@routes   GET /api/v1/bootcamp/:id
//@access   Public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
        return;
        next(error);
    }
    res.status(200).json({
        success: true,
        data: bootcamp
    });
});

//@desc     Create New Bootcamps
//@routes   Post /api/v1/bootcamps
//@access   Private

exports.createBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
});

//@desc     Update Bootcamp
//@routes   PUT /api/v1/bootcamps/:id
//@access   Private

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!bootcamp) {
        next(error);
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    });
});

//@desc     Delete Bootcamp
//@routes   DELETE /api/v1/bootcamps
//@access   Private

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
        next(error);
    }

    res.status(200).json({
        success: true,
        data: {}
    });
});
