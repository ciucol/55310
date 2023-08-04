const { Server } = require('socket.io')

const initializeIO = httpServer => {
  const io = new Server(httpServer)

  io.on('connection', socket => {
    socket.on('message', payload => {
      console.log(payload, socket.id)
    })

    socket.emit('individual', `Este mensaje es para ${socket.id}`)

    socket.broadcast.emit(
      'broadcast',
      `un mensaje para todos menos para ${socket.id}`
    )

    io.emit('todos', 'Este es un mensaje para todos los conectados')
  })
}

module.exports = initializeIO
