const { Router } = require('express')
const usersService = require('../services/users.service')
const UserDTO = require('../DTOs/users.dto')
const UserResponseDTO = require('../DTOs/users-response.dto')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await usersService.getAll()
    res.json({ message: users })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const userInfo = new UserDTO(req.body)
    console.log(userInfo)

    const newUser = await usersService.create(userInfo)

    const response = new UserResponseDTO(newUser)

    res.json(response)
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
