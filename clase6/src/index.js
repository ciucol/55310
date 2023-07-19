const express = require('express')

const port = 3000
const app = express()

const users = [
  {
    id: 1,
    name: 'Mate',
    lastname: 'Naran',
  },
  {
    id: 2,
    name: 'Titín',
    lastname: 'Naran',
  },
  {
    id: 3,
    name: 'Caro',
    lastname: 'Naran',
  },
]

app.get('/users', (req, res) => {
  const { limit } = req.query
  if (limit) {
    const users = users.slice(0, limit || 10)
    return res.json({ message: users })
  }

  res.json({ message: users })
})

app.get('/users/:id', (req, res) => {
  const { id } = req.params

  const user = users.find(user => user.id === Number(id))
  q
  res.json({ message: user })
})

app.listen(port, () => {
  console.log(`Server runnning at port ${port}`)
})
