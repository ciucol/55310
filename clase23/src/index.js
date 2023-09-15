const express = require('express')
const router = require('./router')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

router(app)

app.listen(3001, () => {
  console.log(3001)
})
