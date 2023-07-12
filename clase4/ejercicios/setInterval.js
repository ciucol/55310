const contador = () => {
  let counter = 1
  console.log('Realizando operación')

  const timer = setInterval(() => {
    console.log(counter++)
    if (counter > 5) {
      clearInterval(timer)
    }
  }, 1000)
}

console.log('Iniciar')
contador()
console.log('finalizó')
