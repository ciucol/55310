const users = []

class UsersArray {
  async getAll() {
    try {
      return users
    } catch (error) {
      throw error
    }
  }

  async create(userInfo) {
    try {
      users.push(userInfo)

      return users
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersArray
