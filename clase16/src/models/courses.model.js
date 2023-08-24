const mongoose = require('mongoose')

const courseCollection = 'course'

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  grade: Number,
})

const Courses = mongoose.model(courseCollection, courseSchema)

module.exports = Courses
