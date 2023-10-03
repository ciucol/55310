const ToysArrayDao = require('../DAOs/toys-array.dao')
const ToysMongoDao = require('../DAOs/toys-mongo.dao')

const Toys = new ToysArrayDao()
// const Toys = new ToysMongoDao()

const getAll = () => {
  return Toys.getAll()
}

const createOne = toyInfo => {
  //TODO: si el vendedor tiene plan premium, colocamos en el registro del jueguete, comisión del 5%, si es plan regular, comisión del 12%

  const newToy = {
    ...toyInfo,
    commission: 0.12,
  }

  //TODO: sms al vendedor diciendo que se creo satisfactoriamente

  return Toys.insertOne(newToy)
}

module.exports = {
  getAll,
  createOne,
}
