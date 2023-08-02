const app = require('./server')

const port = 3000

const httpServer = app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

module.exports = httpServer
