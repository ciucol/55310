const equipos = {
  argentina: 3,
  brasil: 5,
  uruguay: 2,
  italia: 3,
}

console.log(Object.entries(equipos))

console.log(Object.keys(equipos))

const values = Object.values(equipos)

console.log(values.reduce((acc, curr) => acc + curr))
