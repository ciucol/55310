const mongoose = require('mongoose')

class MongoConnect {
  static #instance

  constructor() {
    this.connect()
  }

  async connect() {
    try {
      mongoose.connect(
        'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/?retryWrites=true&w=majority'
      )
      console.log('db is connected')
    } catch (error) {
      console.log(error)
    }
  }
  static getInstance() {
    if (this.#instance) {
      console.log('copia')
      return this.#instance
    }
    console.log('original')
    this.#instance = new MongoConnect()
    return this.#instance
  }
}

module.exports = MongoConnect
