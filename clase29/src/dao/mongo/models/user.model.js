const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
  orders: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'order',
    },
  ],
})

const Users = mongoose.model(userCollection, userSchema)

module.exports = Users
