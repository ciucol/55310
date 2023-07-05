const objetos = [
  {
    manzanas: 3,
    peras: 1,
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

const [obj1, obj2] = objetos.map(obj => Object.keys(obj))
const newList = [...obj1, ...obj2]
console.log(newList)

const [obj3, obj4] = objetos.map(obj => Object.values(obj))
const newList2 = [...obj3, ...obj4]
console.log(newList2)
const total = newList2.reduce((acc, curr) => acc + curr)
console.log(total)
