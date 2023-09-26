// const UsersMongoDao = require('../DAOs/users-mongo.dao')
const cartsService = require('../DAOs/mongo/carts.model')
const UsersPostgresDao = require('../DAOs/users-postgres.dao')

// const Users = new UsersMongoDao()
const Users = new UsersPostgresDao()

const create = async userInfo => {
  const newCart = cartsService.create()

  const userInfo = {
    name,
    lastname,
    cartId: newCart._id,
  }

  return Users.create(userInfo)
}

module.exports = {
  getOne,
  getAll,
  create,
  update,
}
