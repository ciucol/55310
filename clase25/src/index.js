const express = require('express')
const parseArgs = require('./commands/mode')
const { port, environment } = require('./config')
const compleja = require('./utils/compleja')
const { fork } = require('child_process')

const app = express()

// const { mode } = parseArgs()
// const { port, environment } = loadConfig(mode)

app.get('/suma', (req, res) => {
  const child = fork(process.cwd() + '/src/utils/compleja.js')
  child.send('Inicia el proceso complejo')
  child.on('message', result => {
    res.json({ message: result })
  })
})

app.get('/saludo', (req, res) => {
  res.json({ message: 'hi coders' })
})

app.listen(port, () => {
  console.log(`Server running at port ${port} - ${environment}`)
})
