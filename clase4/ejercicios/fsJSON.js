const fs = require('fs')

const leerJSON = async () => {
  try {
    const response = await fs.promises.readFile('./package.json', 'utf-8')
    const obj = JSON.parse(response)

    console.log(obj.scripts)

    await fs.promises.unlink('./package.json')

    await fs.promises.writeFile('./package.json', JSON.stringify(response))
  } catch (error) {
    console.log(error)
  }
}

leerJSON()

const user = {
  name: 'Mate',
}

user.lastname = 'Naran'

console.log(user)
