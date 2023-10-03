const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/test', (req, res) => {
  res.json('Conectamos')
})

app.listen(3000, () => {
  console.log(3000)
})
