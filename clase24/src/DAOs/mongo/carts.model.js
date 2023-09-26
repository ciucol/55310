const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({})

const Carts = mongoose.model('cart', userSchema)

module.exports = Carts
