const userController = require('../controllers/users.controller')

const router = app => {
  app.use('/users', userController)
}

module.exports = router
