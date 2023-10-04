const mongoose = require('mongoose')

const usersCollection = 'user'

const usersSchema = new mongoose.Schema({
  name: String,
  lastname: String,
})

const Users = mongoose.model(usersCollection, usersSchema)

module.exports = Users
