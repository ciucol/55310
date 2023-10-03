const Toys = require('./mongo/models/toys.model')

class ToysMongoDao {
  async getAll() {
    console.log('mongo')
    return await Toys.find()
  }

  async insertOne(toyInfo) {
    console.log('mongo')
    const newToy = await Toys.create(toyInfo)
    return `New toy is created with id: ${newToy._id}`
  }
}

module.exports = ToysMongoDao
