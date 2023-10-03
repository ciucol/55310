const { Router } = require('express')

const router = Router()

router.get('/toys', (req, res) => {
  res.render('toys.handlebars')
})

module.exports = router
