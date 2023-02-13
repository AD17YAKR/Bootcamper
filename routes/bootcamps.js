const express = require('express');
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampInRadius,
    bootcampPhotoUpload
} = require('../controllers/bootcamps.js');

const Bootcamp = require('../models/Bootcamp');

const advanceResults = require('../middlewares/advanceResults');

//Including other resources router
const courseRouter = require('./courses');

const router = express.Router();

const { protect } = require('../middlewares/auth');

//Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampInRadius);

router.route('/')
    .get(advanceResults(Bootcamp, 'courses'), getBootcamps)
    .post(protect, createBootcamp);

router.route('/:id/photo')
    .put(protect, bootcampPhotoUpload);

router.route('/:id')
    .get(getBootcamp)
    .put(protect, updateBootcamp)
    .delete(protect, deleteBootcamp);

module.exports = router;
