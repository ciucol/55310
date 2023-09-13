const authController = require('../controller/auth.controller')

const router = app => {
  app.use('/auth', authController)
}

module.exports = router
