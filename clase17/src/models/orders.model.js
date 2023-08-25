const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const orderCollection = 'order'

const orderSchema = new mongoose.Schema({
  name: String,
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium',
  },
  price: Number,
  quantity: Number,
  date: Date,
})

orderSchema.plugin(mongoosePaginate)

const Orders = mongoose.model(orderCollection, orderSchema)

module.exports = Orders
