//@desc     Get all Bootcamps
//@routes   GET /api/v1/bootcamps
//@access   Public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'all Bootcamps'
    });
};

//@desc     Get Bootcamp by id
//@routes   GET /api/v1/bootcamp/:id
//@access   Public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'single Bootcamp' });
};

//@desc     Create New Bootcamps
//@routes   Post /api/v1/bootcamps
//@access   Private

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Creating Bootcamp' });
};

//@desc     Update Bootcamp
//@routes   PUT /api/v1/bootcamps/:id
//@access   Private

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Update Bootcamp' });
};

//@desc     Delete Bootcamp
//@routes   DELETE /api/v1/bootcamps
//@access   Private

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'deleting Bootcamp' });
};
