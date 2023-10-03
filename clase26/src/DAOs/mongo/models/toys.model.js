const mongoose = require('mongoose')

const toyCollection = 'toy'

const toySchema = new mongoose.Schema({
  name: String,
  price: Number,
})

const Toys = mongoose.model(toyCollection, toySchema)

module.exports = Toys
