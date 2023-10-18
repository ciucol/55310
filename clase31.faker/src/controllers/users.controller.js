const { Router } = require('express')
const generateUsers = require('../utils/mock.util')

const router = Router()

router.get('/', (req, res) => {
  const { numUsers = 1 } = req.query
  const users = generateUsers(numUsers)
  res.json({ payload: users })
})

module.exports = router
