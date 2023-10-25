const { environment } = require('../../configs')

switch (environment) {
  case 'dev':
    module.exports = require('./devLogger.winston')
    break

  case 'prod':
    module.exports = require('./prodLogger.winston')
    break
}
