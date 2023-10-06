const { Router } = require('express')
const {
  getOrders,
  getOrdersById,
  resolveOrder,
} = require('../controllers/orders.controller')

const router = Router()

router.get('/', getOrders)
router.get('/:id', getOrdersById)
router.post('/', resolveOrder)

module.exports = router
