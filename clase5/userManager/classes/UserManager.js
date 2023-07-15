const fs = require('fs')
const crypto = require('crypto')

class UsersManager {
  users = []

  constructor(file) {
    this.path = `${process.cwd()}/files/${file}`
  }

  async create(user) {
    try {
      const { name, lastname, username, password } = user

      const userInfo = {
        name,
        lastname,
        username,
        password: this.#hashPassword(password),
      }

      this.users.push(userInfo)
      await fs.promises.writeFile(this.path, JSON.stringify(this.users))
    } catch (error) {
      console.log(error)
    }
  }

  async userValidation(name, password) {
    try {
      const data = await fs.promises.readFile(this.path, 'utf-8')
      const users = JSON.parse(data)

      const user = users.find(user => user.name === name)
      if (this.#validatePassword(password, user.password))
        return console.log('Logeado')

      throw new Error('No coincide la contraseña')
    } catch (error) {
      console.log(error)
    }
  }

  #hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex')
  }

  #validatePassword(password, hashedPassword) {
    const hash = this.#hashPassword(password)
    return hash === hashedPassword
  }
}

module.exports = UsersManager
