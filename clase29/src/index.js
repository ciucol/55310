const app = require('./server')
const { port } = require('./configs')

app.listen(port, () => {
  console.log(port)
})
