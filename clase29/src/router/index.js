const usersRouter = require('./users.router')
const businessRouter = require('./business.router')
const ordersRouter = require('./orders.router')

const router = app => {
  app.use('/users', usersRouter)
  app.use('/business', businessRouter)
  app.use('/orders', ordersRouter)
}

module.exports = router
