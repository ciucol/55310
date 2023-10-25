const winton = require('winston')

const winstonLogger = winton.createLogger({
  transports: [
    new winton.transports.Console({ level: 'debug' }),
    new winton.transports.File({
      filename: 'otroArchivo.log',
      level: 'verbose',
    }),
  ],
})

module.exports = winstonLogger
