const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))

app.get('/users', (req, res) => {
  res.json('hiCoders')
})

app.listen(3000, () => console.log('Server running at port 3000'))
