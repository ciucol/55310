const { Router } = require('express')
const { authToken } = require('../utils/jwt.util')
const passport = require('passport')

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

router.get(
  '/profile-info',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ message: 'info del usuario' })
  }
)

module.exports = router
