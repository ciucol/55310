const mongoose = require('mongoose')

const numberCollection = 'number'

const numberSchema = new mongoose.Schema({
  value: Number,
})

const Numbers = mongoose.model(numberCollection, numberSchema)

module.exports = Numbers
