const fs = require('fs')

const escribirArchivo = async cb => {
  try {
    const { data } = await axios.get('pokeapi.com/ditto')
    cb(null, data)
  } catch (error) {
    cb(error)
  }
}

escribirArchivo((error, data) => console.log(data))
