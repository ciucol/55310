const Carts = require('../DAOs/mongo/carts.model')

const create = async () => {
  return await Carts.create()
}

module.exports = {
  getOne,
  getAll,
  create,
  update,
}
