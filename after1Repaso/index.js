const fs = require('fs')

fs.writeFileSync('./miArchivo.txt', 'hola desde callback')

fs.readFile('./miArchivo.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err)

  console.log(data)
})

const func = async () => {
  try {
    const response = await fs.promises.unlink('./miArchivo.txt')
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

func()
