const { Router } = require('express')
const {
  getBusiness,
  getBusinessById,
  createBusiness,
  updateBusiness,
  deleteBusiness,
  addProduct,
} = require('../controllers/business.controller')

const router = Router()

router.get('/', getBusiness)
router.get('/:id', getBusinessById)
router.post('/', createBusiness)
router.patch('/:id', updateBusiness)
router.post('/:id/products', addProduct)
router.delete('/:id', deleteBusiness)

module.exports = router
