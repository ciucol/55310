const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 5,
    jugos: 2,
    dulces: 3,
  },
  {
    manzanas: 1,
    sandias: 3,
    papayas: 4,
    moras: 2,
    peras: 7,
  },
]

const response = objetos.map(obj => Object.keys(obj))
// console.log(response.flat(1))

const arr = [
  1,
  2,
  [
    2.1,
    2.2,
    ['2.2.1', '2.2.2', ['2.2.2.1', '2.2.2.2', '2.2.2.3'], '2.2.3'],
    2.3,
  ],
  3,
  4,
  5,
]
console.log(arr.flat(Infinity))
