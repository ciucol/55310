const mongoose = require('mongoose')

class MongoConnection {
  static #instance

  constructor() {
    this.connect()
  }

  async connect() {
    try {
      await mongoose.connect(
        'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/prueba?retryWrites=true&w=majority'
      )
      console.log('db is connected')
    } catch (error) {
      console.log(error)
    }
  }

  static getInstance() {
    if (this.#instance) {
      return this.#instance
    }

    this.#instance = new MongoConnection()
    return this.#instance
  }
}

module.exports = MongoConnection
