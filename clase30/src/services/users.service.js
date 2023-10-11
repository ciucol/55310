const messageRepository = require('../repositories')
const { v4: uuidv4 } = require('uuid')

const users = []

const getUsers = () => {
  return users
}

const createUser = async userInfo => {
  saveUser(userInfo)

  sendMessage(userInfo)

  return 'User created'
}

const saveUser = userInfo => {
  userInfo.code = uuidv4()
  users.push(userInfo)
}

const sendMessage = userInfo => {
  const messageInfo = {
    name: userInfo.name,
    fullname: userInfo.fullname,
    email: userInfo.email,
    number: userInfo.number,
  }

  messageRepository.sendMessage(messageInfo)
}

module.exports = {
  getUsers,
  createUser,
}
