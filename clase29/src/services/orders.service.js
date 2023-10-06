const OrdersDao = require('../dao/mongo/orders.dao')

const Orders = new OrdersDao()

const getOrders = async () => {
  try {
    return await Orders.getOrders()
  } catch (error) {
    throw error
  }
}

const getOrderById = async id => {
  try {
    return await Orders.getOrdersById(id)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getOrders,
  getOrderById,
}
