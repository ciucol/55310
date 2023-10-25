const express = require('express')
const router = require('./router')
const logger = require('./middlewares/logger.middleware')

const app = express()

app.use(express.json())
app.use(logger)

router(app)

app.listen(3000, () => {
  console.log(3000)
})
