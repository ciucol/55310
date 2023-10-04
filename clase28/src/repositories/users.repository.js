class UsersRepository {
  constructor(dao) {
    this.dao = dao
  }

  async getAll() {
    try {
      return this.dao.getAll()
    } catch (error) {
      throw error
    }
  }

  async create(userInfo) {
    try {
      return this.dao.create(userInfo)
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersRepository
