const { persitence } = require('../configs')

switch (persitence) {
  case 'local':
    console.log('CRUD en array')
    module.exports = require('../DAOs/arrays/users-array.dao')
    break

  case 'dev':
    console.log('CRUD en mongo')
    module.exports = require('../DAOs/mongo/users-mongo.dao')
}
