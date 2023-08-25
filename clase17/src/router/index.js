const numbersController = require('../numbers/controller.numbers')
const ordersController = require('../orders/controller.orders')

const router = app => {
  app.use('/numbers', numbersController)
  app.use('/orders', ordersController)
}

module.exports = router
