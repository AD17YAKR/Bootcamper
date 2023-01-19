const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Courses = require('../models/Courses');
const Bootcamp = require('../models/Bootcamp');
//@desc     Get Courses
//@route    GET /api/v1/courses
//@route    GET /api/v1/bootcamps/:bootcampId/courses
//@access   Public
exports.getCourses = asyncHandler(async (req, res, next) => {
    let query;

    if (req.query.bootcampId) {
        query = Courses.find({ bootcamp: req.params.bootcampId });
    } else {
        query = Courses.find().populate({
            path: 'bootcamp',
            select: 'name description'
        });
    }

    const courses = await query;

    res.status(200).json({
        success: true,
        count: courses.length,
        data: courses
    });
});

//@desc     Get Course by id
//@route    GET /api/v1/courses/:id
//@access   Public
exports.getCourse = asyncHandler(async (req, res, next) => {
    const course = await Courses.findById(req.params.id).populate({
        path: 'bootcamp',
        select: 'name description'
    });

    if (!course) {
        return next(
            new ErrorResponse(`No Course with the id of ${req.params.id}`),
            404
        );
    }

    res.status(200).json({
        success: true,
        data: course
    });
});

//@desc     Get Course by id
//@route    POST /api/v1/bootcamp/:bootcampId/courses
//@access   Private
exports.addCourse = asyncHandler(async (req, res, next) => {
    req.body.bootcamp = req.params.bootcampId;

    const bootcamp = await Bootcamp.findById(req.params.bootcampId);

    if (!bootcamp) {
        return next(
            new ErrorResponse(
                `No Bootcamp with the id of ${req.params.bootcampId}`
            ),
            404
        );
    }

    const course = await Courses.create(req.body);

    res.status(200).json({
        success: true,
        data: course
    });
});

//@desc     Update Course by id
//@route    POST /api/v1/courses/:id
//@access   Private
exports.updateCourse = asyncHandler(async (req, res, next) => {
    req.body.bootcamp = req.params.bootcampId;

    let course = await Courses.findById(req.params.id);

    if (!course) {
        return next(
            new ErrorResponse(`No Bootcamp with the id of ${req.params.id}`),
            404
        );
    }

    course = await Courses.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: course
    });
});

//@desc     Delete Course by id
//@route    POST /api/v1/courses/:id
//@access   Private
exports.deleteCourse = asyncHandler(async (req, res, next) => {
    const course = await Courses.findById(req.params.id);

    if (!course) {
        return next(
            new ErrorResponse(`No Bootcamp with the id of ${req.params.id}`),
            404
        );
    }

    await course.remove();

    res.status(200).json({
        success: true,
        data: {}
    });
});
