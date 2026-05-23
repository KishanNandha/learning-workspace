const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    title: String,
    author: String
});

module.exports = mongoose.model('Course', CourseSchema);