const saludar = name => {
  return new Promise((resolve, reject) => {
    if (name === 'mate') {
      resolve(`Hola ${name}`)
    } else {
      reject('Lo siento solo saludo a Mate')
    }
  })
}

const miSaludo = async () => {
  try {
    const response = await saludar('diego')
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

miSaludo()
