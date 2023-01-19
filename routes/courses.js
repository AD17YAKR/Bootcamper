const express = require('express');
const { getCourses, getCourse, addCourse, updateCourse, deleteCourse } = require('../controllers/courses.js');

const Course = require('../models/Courses');
const advanceResults = require('../middlewares/advanceResults');

const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(
        advanceResults(Course, {
            path: 'bootcamp',
            select: 'name description'
        }),
        getCourses
    )
    .post(addCourse);

router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;
