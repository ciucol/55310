const UsersRepository = require('./users.repository')

const UsersDAO = require('../DAOs/factory')

const Users = new UsersRepository(new UsersDAO())

module.exports = Users
