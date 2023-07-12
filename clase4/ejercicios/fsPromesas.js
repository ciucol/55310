const fs = require('fs')

const operaciones = async () => {
  try {
    await fs.promises.writeFile('./miArchivo.txt', 'Hola gente desde promesas')

    const response = await fs.promises.readFile('./miArchivo.txt', 'utf-8')
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

operaciones()
