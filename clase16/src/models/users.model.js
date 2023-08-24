const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: String,
  gender: String,
  courses: {
    type: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'course',
        },
      },
    ],
    default: [],
  },
})

userSchema.pre('find', function () {
  this.populate('courses.course')
})

const Users = mongoose.model(userCollection, userSchema)

module.exports = Users
