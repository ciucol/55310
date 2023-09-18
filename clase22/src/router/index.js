const authController = require('../controllers/auth.controller')
const ProductsRouter = require('../controllers/products.controller')
const usersController = require('../controllers/users.controller')

const productsRouter = new ProductsRouter()

const router = app => {
  app.use('/auth', authController)
  app.use('/users', usersController)
  app.use('/products', productsRouter.getRouter())
  app.use('*', (req, res) => {
    res.status(404).json({ status: 'error', error: 'Not found' })
  })
}

module.exports = router
