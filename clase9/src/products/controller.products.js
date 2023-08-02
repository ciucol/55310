const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.render('products', {
    style: 'products',
  })
})

module.exports = router
