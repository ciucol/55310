const mongoose = require('mongoose')

const orderCollection = 'order'

const orderSchema = new mongoose.Schema({
  number: Number,
  products: [],
  totalPrice: Number,
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'business',
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  },
})

const Orders = mongoose.model(orderCollection, orderSchema)

module.exports = Orders
