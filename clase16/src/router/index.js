const usersController = require('../users/controller.users')
const coursesController = require('../courses/controller.course')

const router = app => {
  app.use('/users', usersController)
  app.use('/courses', coursesController)
}

module.exports = router
