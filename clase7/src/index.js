const express = require('express')
const users = require('./db/users')

const port = 3000
const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
  res.json({ message: users })
})

app.get('/users/:name', (req, res) => {
  const { name } = req.params
  const user = users.find(user => user.name === name)

  res.json({ message: user, next: 'http://localhost:3000/users' })
})

app.put('/users/:name', (req, res) => {
  const { name } = req.params
  const { email } = req.body

  const user = users.find(user => user.name === name)
  user.email = email

  res.json({ message: users })
})

app.post('/users', (req, res) => {
  const { name, lastname, email, password } = req.body

  const userInfo = {
    name,
    lastname,
    email,
    password,
  }
  users.push(userInfo)

  res.json({ message: 'Usuario creado' })
})

app.delete('/users/:name', (req, res) => {
  const { name } = req.params
  const userIndex = users.findIndex(user => user.name === name)

  users.splice(userIndex, 1)

  res.json({ message: users })
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
