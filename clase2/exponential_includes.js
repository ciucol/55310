const num1 = 3

const valoresBase = [2, 4, 6]

const myMap = function (cb) {
  const result = []
  for (let i = startIndex; i < this.length; i++) {
    result.push(cb(this[i]))
  }

  return result
}

const response = myMap(valoresBase, num => num + 100)

console.log(response)

console.log(
  'con el map: ',
  valoresBase.map(num => num + 100)
)

Array.prototype.myMap = myMap

console.log(
  'con mi propio map',
  valoresBase.myMap(num => num + 100)
)

const nombres = ['Mate', 'Titín', 'Caro']

console.log(nombres.includes('Mate'))
