const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'superAdmin'],
    default: 'user',
  },
})

const Users = mongoose.model(userCollection, userSchema)

module.exports = Users
