const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  persitence: process.env.NODE_ENV,
}
