const { Router } = require('express')
const Numbers = require('../models/users.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const numbers = await Numbers.aggregate([
      { $sort: { value: 1 } },
      { $match: { value: { $gt: 3 } } },
      {
        $group: {
          _id: null,
          maximo: { $max: '$value' },
          minimo: { $min: '$value' },
        },
      },
      {
        $count: 'docs',
      },
    ])

    res.json({ message: numbers })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { value } = req.body

    const numberInfo = {
      value,
    }

    const newNumber = await Numbers.create(numberInfo)

    res.json({ message: newNumber })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
