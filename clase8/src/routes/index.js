const petsController = require('../pets/controller')

const router = app => {
  // app.use('/users')
  // app.use('/carts')

  app.use('/pets', petsController)

  // app.use('/products')
}

module.exports = router
