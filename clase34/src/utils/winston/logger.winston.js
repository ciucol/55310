const winston = require('winston')

const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'http' }),
    new winston.transports.File({ filename: 'errors.log', level: 'warn' }),
    new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
  ],
})

module.exports = winstonLogger
