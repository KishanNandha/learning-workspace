const mongoose = require('mongoose');
const Joi = require('joi');

//course model
const Course = require('../models/course.model.js');

//joi schema
const CourseJoiSchema = {
    title : Joi.string().min(3).required(),
    author: Joi.string().min(3).required()
};


exports.getCoursesList =  (request,response) => {
    Course.find()
        .then(courses => {
            if(!courses) {
                response.status(404).send({
                    message: "Can not find any course " 
                });
                retrun;
            }
            response.status(200).send(courses);
        })
        .catch(error => {
            response.status(500).send({
                message: err.message || "Some error occurred while creating the Note." })
        })
}

exports.createCourse = (request,response) => {

    const joiResult = Joi.validate(request.body,CourseJoiSchema);

    if(joiResult.error)
    {
        response.status(400).send(joiResult.error.message);
        return;
    }

    let course = new Course ({
        title: request.body.title,
        author: request.body.author
    });

    course.save()
          .then(data => {
            response.send(data);
            })
          .catch(err => {
            response.status(500).send({
                 message: err.message || "Some error occurred while creating the Note."
        })})
    }

exports.getCourse = (request, response) => {
    Course.findById(request.params.courseId)
            .then(course => {
                if(!course) {
                    response.status(404).send({
                        message: "Note not found with id " + request.params.courseId
                    });
                    retrun;
                }
                response.status(200).send(course);
            })
            .catch(error => {
                if(error.kind === 'ObjectId') {
                    return response.status(404).send({
                        message: "Course not found with id " + request.params.courseId
                    });                
                }
                return response.status(500).send({
                    message: "Error retrieving course with id " + request.params.courseId
                });
            })
}

exports.updateCourse =  (request,response) => {

    if(!request.params.courseId) {
        return response.status(400).send( {
            message: "Please enter valid course ID."
        });
    }

    const joiResult = Joi.validate(request.body,CourseJoiSchema);
    if(joiResult.error) {
        response.status(400).send(joiResult.error);
        return;
    }
    
    const course = {
        title: request.body.title,
        author: request.body.author
    };

    Course.findByIdAndUpdate(request.params.courseId,course)
            .then(course => {
                if(!course) {
                    response.status(404).send({
                        message: "Course not found with id " + request.params.courseId
                    });
                    retrun;
                }
                response.status(200).send(course);
            })
            .catch(error => {
                if(error.kind === 'ObjectId') {
                    return response.status(404).send({
                        message: "Course not found with id " + request.params.courseId
                    });                
                }
                return response.status(500).send({
                    message: "Error retrieving course with id " + request.params.courseId
                });
            })
}

exports.deleteCourse = (request,response) => {

    if(!request.params.courseId) {
        return response.status(400).send( {
            message: "Please enter valid course ID."
        });
    }

    Course.findByIdAndDelete(request.params.courseId)
            .then(course => {
                if(!course) {
                    response.status(404).send({
                        message: "Course not found with id " + request.params.courseId
                    });
                    retrun;
                }
                response.status(200).send(course);
            })
            .catch(error => {
                if(error.kind === 'ObjectId') {
                    return response.status(404).send({
                        message: "Course not found with id " + request.params.courseId
                    });                
                }
                return response.status(500).send({
                    message: "Error retrieving course with id " + request.params.courseId
                });
            })
}

