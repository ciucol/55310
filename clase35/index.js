const cluster = require('node:cluster')
const process = require('node:process')
const { cpus } = require('node:os')
const express = require('express')

if (cluster.isPrimary) {
  console.log(`Proceso primario con id: ${process.pid}`)

  for (let i = 0; i < cpus().length; i++) {
    cluster.fork()
  }

  // cluster.on('message', (worker, message) => {
  //   console.log(message)
  //   console.log(`Viendo el worker desde el cluster on ${worker.process.pid}`)
  // })

  cluster.on('exit', worker => {
    console.log(`El proceso con id ${worker.process.pid} ha finalizado`)
    cluster.fork()
  })
} else {
  console.log(`Soy un worker con id: ${process.pid}`)
  const app = express()

  process.send('Un mensaje')

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

  app.listen(3000, () => {
    console.log(
      `Servidor corriendo en el puerto 3000 con process id: ${process.pid}`
    )
  })
}
