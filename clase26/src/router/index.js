const toysController = require('../controllers/toys.controller')
const usersController = require('../controllers/users.controller')

const router = app => {
  app.use('/templates', templatesController)
  app.use('/toys', toysController)
  app.use('/users', usersController)
  app.use('*', (req, res) => {
    res.status(404).json({ status: 'error', error: 'Not Found' })
  })
}

module.exports = router
