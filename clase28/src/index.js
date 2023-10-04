const express = require('express')
const router = require('./router')
const MongoConnect = require('./db')

const app = express()

app.use(express.json())

router(app)

MongoConnect.getInstance()

app.listen(3000, () => {
  console.log(3000)
})
