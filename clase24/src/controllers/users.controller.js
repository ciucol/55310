const { Router } = require('express')
const usersService = require('../services/users.service')

const router = Router()

router.post('/', (req, res) => {
  const { name, lastname } = req.body

  usersService.create({ name, lastname })

  res.json({ status: 'success' })
})
