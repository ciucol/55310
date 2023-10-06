const Users = require('./models/user.model')

class UsersDao {
  async getUsers() {
    try {
      return await Users.find()
    } catch (error) {
      throw error
    }
  }

  async getUserById(id) {
    try {
      return await Users.findById(id)
    } catch (error) {
      throw error
    }
  }

  async createUser(userInfo) {
    try {
      return await Users.create(userInfo)
    } catch (error) {
      throw error
    }
  }

  async updateUser(id, userInfo) {
    try {
      return await Users.updateOne({ _id: id }, { $set: userInfo })
    } catch (error) {
      throw error
    }
  }

  async deleteUser(id) {
    try {
      return await Users.deleteOne({ _id: id })
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersDao
