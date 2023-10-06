const bcrypt = require('bcrypt')

const getEncryptPassword = password => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

const getDecryptpassword = (password, passwordEncrypted) => {
  return bcrypt.compareSync(password, passwordEncrypted)
}

module.exports = {
  getEncryptPassword,
  getDecryptpassword,
}
