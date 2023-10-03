const toys = []

class ToysArrayDao {
  getAll() {
    console.log('array')
    return toys
  }

  insertOne(newToy) {
    console.log('array')
    toys.push(newToy)
    return 'New toy is created'
  }
}

module.exports = ToysArrayDao
