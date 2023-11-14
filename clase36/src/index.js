const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

app.use(morgan('combined'))

app.get('/users', (req, res) => {
  console.log(req.headers)
  res.json({ message: 'hiCoders' })
})

app.listen(3000, () => console.log('Server running at port 3000'))
