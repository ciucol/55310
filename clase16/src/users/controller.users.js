const { Router } = require('express')
const Users = require('../models/users.model')
const usersArr = require('../../Users')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.find({ first_name: 'Mate' })

    res.json({ message: users })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, gender } = req.body

    const userInfo = {
      first_name,
      last_name,
      email,
      gender,
    }

    const newUser = await Users.create(userInfo)

    res.json({ message: newUser })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/many-users', async (req, res) => {
  try {
    await Users.insertMany(usersArr)

    res.json({ message: 'Users created' })
  } catch (error) {
    res.json({ error })
  }
})

router.delete('/', async (req, res) => {
  await Users.deleteMany()

  res.json({ message: 'All users deleted' })
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { course } = req.body

    const user = await Users.findOne({ _id: id })

    user.courses.push({ course })

    await Users.updateOne({ _id: id }, user)

    res.json({ message: 'User updated' })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
