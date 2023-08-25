const { Router } = require('express')
const Orders = require('../models/orders.model')

const router = Router()

const orders = [
  {
    name: 'Margarita',
    size: 'medium',
    price: 23,
    quantity: 17,
    date: '2021-03-13T08:14:30Z',
  },
  {
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: '2021-03-13T08:14:30Z',
  },
  {
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: '2021-03-13T09:13:24Z',
  },
  {
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
    date: '2021-03-17T09:22:12Z',
  },
  {
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
    date: '2021-03-13T11:21:39.736Z',
  },
  {
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: '2022-01-12T21:23:13.331Z',
  },
  {
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: '2022-01-12T05:08:13Z',
  },
  {
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: '2021-01-13T05:08:13Z',
  },
  {
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: '2021-01-13T05:10:13Z',
  },
]

router.get('/reports/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { limit = 10, page = 1 } = req.query
    const orders = await Orders.paginate(
      {},
      { limit: Number(limit), page: Number(page) }
    )
    // const orders = await Orders.aggregate([
    //   {
    //     $match: { size: id },
    //   },
    //   {
    //     $group: {
    //       _id: '$name',
    //       totalQuantity: { $sum: '$quantity' },
    //     },
    //   },
    //   {
    //     $sort: { totalQuantity: 1 },
    //   },
    //   {
    //     $group: {
    //       _id: 1,
    //       orders: {
    //         $push: '$$ROOT',
    //       },
    //     },
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       orders: '$orders',
    //     },
    //   },
    //   {
    //     $merge: {
    //       into: 'reports',
    //     },
    //   },
    // ])
    res.json({ status: 'success', payload })
  } catch (error) {
    res.json({ status: 'error' })
  }
})

router.post('/', async (req, res) => {
  try {
    await Orders.insertMany(orders)
    res.json({ message: 'Orders Created' })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
