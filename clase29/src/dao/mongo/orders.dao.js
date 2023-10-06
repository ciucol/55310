const Orders = require('./models/order.model')

class OrdersDao {
  async getOrders() {
    try {
      return await Orders.find()
    } catch (error) {
      throw error
    }
  }

  async getOrdersById(id) {
    try {
      return await Orders.findById(id)
    } catch (error) {
      throw error
    }
  }

  async createOrder(orderInfo) {
    try {
      return await Orders.create(orderInfo)
    } catch (error) {
      throw error
    }
  }

  async resolveOrder(id, orderInfo) {
    try {
      return await Orders.updateOne({ _id: id }, { $set: orderInfo })
    } catch (error) {
      throw error
    }
  }
}

module.exports = OrdersDao
