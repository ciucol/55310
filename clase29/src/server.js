const express = require('express')
const router = require('./router')
const morgan = require('morgan')
const MongoConnection = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

MongoConnection.getInstance()

router(app)

module.exports = app
