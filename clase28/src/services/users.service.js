const Users = require('../repositories')

const getAll = async () => {
  try {
    return Users.getAll()
  } catch (error) {
    throw error
  }
}

const create = async userInfo => {
  try {
    const newUser = await Users.create(userInfo)

    return newUser
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAll,
  create,
}
