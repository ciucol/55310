const { Router } = require('express')
const Users = require('../models/Users.model')
const { getHashedPassword, comparePassword } = require('../utils/bcrypts')

const router = Router()

router.post('/register', async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body
    const userInfo = {
      name,
      lastname,
      email,
      password: getHashedPassword(password),
    }

    const newUser = await Users.create(userInfo)

    res.status(201).json({ status: 'success', payload: newUser })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

router.post('/login', async (req, res) => {
  try {
    console.log('llegá')
    const { email, password } = req.body

    if (!email || !password)
      return res.status(400).json({ status: 'error', error: 'Bad request' })

    const user = await Users.findOne({ email })

    if (!user)
      return res
        .status(400)
        .json({ status: 'error', error: 'User and password not matched' })

    if (!comparePassword(password, user.password))
      return res
        .status(400)
        .json({ status: 'error', error: 'User and password not matched' })

    req.session.user = {
      email: user.email,
      role: 'user',
    }

    res.json({ status: 'success', payload: 'New session initialized' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', error: 'Internal Server Error' })
  }
})

module.exports = router
