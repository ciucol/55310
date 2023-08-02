const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.render('users')
})

router.post('/', (req, res) => {
  console.log(req.body)

  res.json({ message: 'Usuario creado' })
})

router.get('/realtimeproducts', (req, res) => {
  res.render
})

module.exports = router
