const fs = require('fs')

fs.writeFileSync('./miArchivo.txt', 'Hola gente!!!')

if (fs.existsSync('./miArchivo.txt')) {
  const contenido = fs.readFileSync('./miArchivo.txt', 'utf-8')

  console.log(contenido)

  fs.appendFileSync('./miArchivo.txt', ' espero que la estén pasando bien')
  const contenido1 = fs.readFileSync('./miArchivo.txt', 'utf-8')
  console.log(contenido1)

  fs.unlinkSync('./miArchivo.txt')
}
