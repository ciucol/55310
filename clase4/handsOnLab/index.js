const ManagerUsuarios = require('./classes/ManagerUsuarios')

const managerUsuarios = new ManagerUsuarios('Usuarios.json')

const usuario = {
  nombre: 'Titin',
  apellido: 'Naran',
  edad: 3,
  curso: 'Jardín',
  pago: true,
}

managerUsuarios.crearUsuario(usuario)

managerUsuarios
  .consultarUsuarios()
  .then(response => console.log(response))
  .catch(err => console.log(err))

console.log('Terminamos')
