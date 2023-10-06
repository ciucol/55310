const express = require('express')
const router = require('./router')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

router(app)

module.exports = app
