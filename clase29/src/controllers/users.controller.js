const UserDto = require('../dto/user.dto')
const usersService = require('../services/users.service')

const getUsers = async (req, res) => {
  try {
    const users = await usersService.getUsers()
    res.json({ message: users })
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', error: error })
  }
}

const getUserById = (req, res) => {
  res.json({ message: 'get users' })
}

const createUser = async (req, res) => {
  try {
    const userInfo = new UserDto(req.body)
    const user = await usersService.createUser(userInfo)
    res.status(201).json({ message: user })
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res
        .status(400)
        .json({ status: 'error', error: 'EL usuario no pudo ser creado' })
    }

    res.status(500).json({ status: 'error', error: 'Internal server error' })
  }
}

const updateUser = (req, res) => {
  res.json({ message: 'get users' })
}

const deleteUser = (req, res) => {
  res.json({ message: 'get users' })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
