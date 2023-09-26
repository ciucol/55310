const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({})

const Users = mongoose.model('users', userSchema)

module.exports = Users
