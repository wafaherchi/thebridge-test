const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    course_image: String,
    title: String,
    price: Number
})

const courseModel = mongoose.model('course', courseSchema)

module.exports = courseModel