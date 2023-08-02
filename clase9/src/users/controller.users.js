const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  const users = [
    {
      name: 'Prueba',
      lastname: 'Prueba',
      country: 'Prueba',
      role: 'Prueba',
    },
    {
      name: 'Mate',
      lastname: 'Naran',
      country: 'Col',
      role: 'admin',
    },
    {
      name: 'Titín',
      lastname: 'Naran',
      country: 'Col',
      role: 'user',
    },
    {
      name: 'Bebé nuevo',
      lastname: 'Naran',
      country: 'Col',
      role: 'admin',
    },
    {
      name: 'Caro',
      lastname: 'Naran',
      country: 'Col',
      role: 'user',
    },
    {
      name: 'Diego',
      lastname: 'Naran',
      country: 'Col',
      role: 'user',
    },
  ]

  const toys = [
    {
      name: 'PS5',
      price: 500,
    },
    {
      name: 'Paw Patrol',
      price: 50,
    },
    {
      name: 'Balón',
      price: 100,
    },
    {
      name: 'Moto',
      price: 200,
    },
  ]

  const MIN_NUMBER = 1
  const maxNumber = users.length

  const user =
    users[Math.floor(Math.random() * (maxNumber - MIN_NUMBER) + MIN_NUMBER)]

  res.render('users', {
    object: user,
    isAdmin: user.role === 'admin',
    toys,
    style: 'users',
  })
})

module.exports = router
