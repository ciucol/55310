const { Users } = require('./sequelize/users.model')

class UsersPostgresDao {
  async create() {
    return await Users.insertOne(userInfo)
  }
}

module.exports = UsersPostgresDao
