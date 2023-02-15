const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const geocoder = require('../utils/geocoder');
const Bootcamp = require('../models/Bootcamp');

//@desc     Get all Bootcamps
//@routes   GET /api/v1/bootcamps
//@access   Public

exports.getBootcamps = asyncHandler(async (req, res, next) => {
    console.log(req.params);
    res.status(200).json(res.advanceResults);
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
    //Add user to req.body
    req.body.user = req.user.id;

    //Check for published bootcamps by this user
    const publishedBootcamps = await Bootcamp.findOne({
        user: req.user.id
    });

    //If user is not an admin, they can only create single bootcamp
    if (publishedBootcamps && req.user.role !== 'admin') {
        return next(
            new ErrorResponse(
                `User with id ${req.user.id} already have a bootcamp`,
                400
            )
        );
    }

    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
});

//@desc     Update Bootcamp
//@routes   PUT /api/v1/bootcamps/:id
//@access   Private

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    let bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        next(error);
    }

    // Make Sure user updating the bootcamp is the owner
    if (
        bootcamp.user.toString() !== req.user.id &&
        req.user.role !== 'admin'
    ) {
        return next(
            new ErrorResponse(
                `User ${req.params.id} is unauthorized to updated this bootcamp`,
                401
            )
        );
    }

    bootcamp = await Bootcamp.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: bootcamp
    });
});

//@desc     Delete Bootcamp
//@routes   DELETE /api/v1/bootcamps
//@access   Private

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        next(error);
    }

    bootcamp.remove();

    res.status(200).json({
        success: true,
        data: {}
    });
});

//@desc     Get Bootcamp within a radius
//@routes   DELETE /api/v1/bootcamps/radius/:zipcode/:distance
//@access   Private

exports.getBootcampInRadius = asyncHandler(async (req, res, next) => {
    const { zipcode, distance } = req.params;

    //Get lat/lang from geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    // calculate radius suing radians divide dist by radius of earth
    // Earth radius = 6378km
    const radius = distance / 3963;

    const bootcamps = await Bootcamp.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lat, lng], radius]
            }
        }
    });
    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    });
});

//@desc     Upload photo for Bootcamp
//@routes   PUT /api/v1/bootcamps/:id/photo
//@access   Private

exports.bootcampPhotoUpload = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
        next(
            new ErrorResponse(
                `Bootcamp not found with id ${req.params.id}`,
                404
            )
        );
    }

    if (!req.files) {
        return next(new ErrorResponse('Please Upload a file', 404));
    }

    // Make Sure user updating the bootcamp is the owner
    if (
        bootcamp.user.toString() !== req.user.id &&
        req.user.role !== 'admin'
    ) {
        return next(
            new ErrorResponse(
                `User ${req.params.id} is unauthorized to updated this bootcamp`,
                401
            )
        );
    }

    const file = req.files.file;

    //Make Sure the file is an image
    if (!file.mimetype.startsWith('image')) {
        return next(new ErrorResponse('Please Upload an image file', 400));
    }

    //Check FileSize
    if (file.size > process.env.MAX_FILE_UPLOAD) {
        return next(
            new ErrorResponse(
                `Please Upload a file less than ${process.env.MAX_FILE_UPLOAD}`,
                400
            )
        );
    }

    //Create custom filename
    file.name = `photo_${bootcamp._id}${path.parse(file.name).ext}`;

    file.mv(
        `${process.env.FILE_UPLOAD_PATH}/${file.name}`,
        async (err) => {
            if (err) {
                console.error(err);
                return next(
                    new ErrorResponse(`Problem with file upload`, 400)
                );
            }

            await Bootcamp.findByIdAndUpdate(req.params.id, {
                photo: file.name
            });
            res.status(200).json({
                success: true,
                data: file.name
            });
        }
    );
});
