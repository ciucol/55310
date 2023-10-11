const express = require('express')
const { port } = require('./configs')
const router = require('./router')

const app = express()

app.use(express.json())

router(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
