const express = require('express');
const router = express.Router();

const course_controller = require('../controllers/course.controller');

//Get all courses
router.get('/', course_controller.getCoursesList);

router.post('/',course_controller.createCourse);

router.get('/:courseId',course_controller.getCourse);

router.put('/:courseId',course_controller.updateCourse);

router.delete('/:courseId',course_controller.deleteCourse);

module.exports = router;