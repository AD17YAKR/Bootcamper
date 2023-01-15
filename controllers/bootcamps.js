const Bootcamp = require('../models/Bootcamp');

//@desc     Get all Bootcamps
//@routes   GET /api/v1/bootcamps
//@access   Public

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamp.length,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

//@desc     Get Bootcamp by id
//@routes   GET /api/v1/bootcamp/:id
//@access   Public

exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            res.send(400).json({ success: true });
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

//@desc     Create New Bootcamps
//@routes   Post /api/v1/bootcamps
//@access   Private

exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({ success: true, data: bootcamp });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

//@desc     Update Bootcamp
//@routes   PUT /api/v1/bootcamps/:id
//@access   Private

exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!bootcamp) {
            res.status(400).json({ success: true });
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

//@desc     Delete Bootcamp
//@routes   DELETE /api/v1/bootcamps
//@access   Private

exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            res.status(400).json({ success: true });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
