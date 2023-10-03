const { Router } = require('express')
const toysService = require('../services/toys.service')

const router = Router()

router.get('/', (req, res) => {
  const toys = toysService.getAll()
  res.json({ message: toys })
})

router.post('/', (req, res) => {
  const { name, price } = req.body

  const newToy = {
    name,
    price,
  }

  const response = toysService.createOne(newToy)

  res.json({ status: 'success', message: response })
})

module.exports = router
