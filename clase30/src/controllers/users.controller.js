const { Router } = require('express')
const usersService = require('../services/users.service')
const UserDto = require('../dto/user.dto')

const router = Router()

router.get('/', (req, res) => {
  const users = usersService.getUsers()
  res.json({ status: 'sucess', payload: users })
})

router.post('/', (req, res) => {
  const userInfo = new UserDto(req.body)

  const newUser = usersService.createUser(userInfo)

  res.json({ status: 'success', payload: newUser })
})

module.exports = router
