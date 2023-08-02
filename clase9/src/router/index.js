const usersController = require('../users/controller.users')
const productsController = require('../products/controller.products')
const HTTP_STATUS_CODE = require('../constants/errors.constants')

const router = app => {
  app.use('/users', usersController)
  app.use('/products', productsController)
  app.use('*', (req, res) => {
    res.status(HTTP_STATUS_CODE.NOT_FOUND).json({ message: 'Not found' })
  })
}

module.exports = router
