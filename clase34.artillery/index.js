const express = require('express')

const app = express()

app.get('/sencilla', (req, res) => {
  let sum = 1
  for (let i = 0; i < 1000000; i++) {
    sum += i
  }
  console.log('Operación sencilla')
  res.json({ message: sum })
})

app.get('/compleja', (req, res) => {
  let sum = 1
  for (let i = 0; i < 5e7; i++) {
    sum += i
  }

  res.json({ message: sum })
})

app.listen(8080, () => {
  console.log(8080)
})
