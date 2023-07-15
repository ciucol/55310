const UsersManager = require('./classes/UserManager')

console.log(moment().format())

const usersManager = new UsersManager('Users.json')

const user = {
  name: 'Mate',
  lastname: 'Naran',
  username: 'mateNaran',
  password: 'mate123',
}

usersManager.create(user)

usersManager.userValidation('Mate', 'mate12')
