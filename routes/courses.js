const express = require('express');
const {
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/courses.js');

const Course = require('../models/Courses');
const advanceResults = require('../middlewares/advanceResults');

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middlewares/auth');

router
    .route('/')
    .get(
        advanceResults(Course, {
            path: 'bootcamp',
            select: 'name description'
        }),
        getCourses
    )
    .post(protect, authorize('publisher', 'admin'), addCourse);

router
    .route('/:id')
    .get(getCourse)
    .put(protect, authorize('publisher', 'admin'), updateCourse)
    .delete(protect, authorize('publisher', 'admin'), deleteCourse);

module.exports = router;
