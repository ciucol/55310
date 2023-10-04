const Users = require('./models/users.model')

class UsersMongo {
  async getAll() {
    try {
      return await Users.find()
    } catch (error) {
      throw error
    }
  }

  async create(userInfo) {
    try {
      return await Users.create(userInfo)
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersMongo
