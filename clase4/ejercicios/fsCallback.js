const fs = require('fs')

// fs.writeFile('./miArchivo.txt', 'Hola gente pero con callbacks', err => {
//   if (err) return console.log('Error escribiendo')
//   fs.readFile('./miArchivo.txt', 'utf-8', (err, data) => {
//     if (err) return console.log('Error leyendo')

//     console.log(data)
//     fs.appendFile('./miArchivo.txt', ' actualizando ando', err => {
//       if (err) return console.log('Error actualizando')

//       fs.readFile('./miArchivo.txt', 'utf-8', (err, data) => {
//         if (err) return console.log('Error leyendo')
//         console.log(data)
//       })
//     })
//   })
// })

fs.writeFile('./miArchivoDeActividad.txt', new Date().toISOString(), err => {
  if (err) return console.log('Error escribiendo')
  fs.readFile('./miArchivoDeActividad.txt', 'utf-8', (err, data) => {
    if (err) return console.log('Error leyendo')

    console.log(data)
  })
})
