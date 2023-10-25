const getLogger = require('../utils/winston/factory')

const logger = (req, res, next) => {
  req.logger = getLogger
  req.logger.info(
    `Method: ${req.method} en ${req.url} - Headers: ${JSON.stringify(
      req.headers
    )} - Params: ${JSON.stringify(req.params)} - Queries: ${JSON.stringify(
      req.query
    )} - Body: ${JSON.stringify(req.body)} - ${new Date().toLocaleTimeString()}`
  )

  next()
}

module.exports = logger
