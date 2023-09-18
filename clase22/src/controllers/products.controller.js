const CustomRouter = require('../custom-routers/router.custom-router')

class ProductsRouter extends CustomRouter {
  init() {
    this.get('/', (req, res) => {})

    this.post('/', (req, res) => {
      res.sendSuccessCreated('icafguhsinud')
    })
  }
}

module.exports = ProductsRouter
