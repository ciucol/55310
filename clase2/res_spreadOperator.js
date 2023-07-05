const equipos = {
  argentina: 3,
  brasil: 5,
  uruguay: 2,
  italia: 3,
}

const { argentina, brasil, ...otros } = equipos

const campeones = {
  ...equipos,
  italia: 4,
}

console.log(campeones)
