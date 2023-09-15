const { Router } = require('express')
const { authToken } = require('../utils/jwt.util')
const passport = require('passport')
const passportCall = require('../utils/passport-call.util')

const router = Router()

router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/profile', (req, res) => {
  return res.render('profile')
})

router.get('/profile-info', passportCall('jwt'), (req, res) => {
  const users = [{ name: 'Mate' }, { name: 'Titín' }, { name: 'Bebe nuevo' }]
  res.json({ message: users })
})

module.exports = router
