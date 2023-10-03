const { Router } = require('express')

const router = Router()

const users = []

router.get('/', (req, res) => {
  res.json({ message: users })
})

router.post('/', (req, res) => {
  const { name, lastname } = req.body

  const newUser = {
    name,
    lastname,
  }

  users.push(newUser)

  res.json({ message: newUser })
})

module.exports = router
