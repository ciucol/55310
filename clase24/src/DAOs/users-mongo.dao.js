const Users = require('./mongo/users.model')

class UsersMongoDao {
  async create() {
    return await Users.create(userInfo)
  }
}

module.exports = UsersMongoDao
