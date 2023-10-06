const UsersDao = require('../dao/mongo/users.dao')
const { getEncryptPassword } = require('../utils/bcrypt.util')

const Users = new UsersDao()

const getUsers = async () => {
  try {
    return await Users.getUsers()
  } catch (error) {
    throw error
  }
}

const getUserById = () => {}

const createUser = async userInfo => {
  try {
    userInfo.password = getEncryptPassword(userInfo.password)

    return await Users.createUser(userInfo)
  } catch (error) {
    throw error
  }
}

const updateUser = () => {}

const deleteUser = () => {}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
