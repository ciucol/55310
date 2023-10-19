const { Router } = require('express')
const CustomError = require('../handlers/errors/CustomError')
const TYPES_ERRORS = require('../handlers/errors/types.errors')
const generateUserErrorInfo = require('../handlers/errors/info')
const EnumErrors = require('../handlers/errors/EnumError')

const router = Router()

const users = []

router.get('/string', (req, res) => {
  let string = 'Hola coders! '

  for (i = 0; i < 2e6; i++) {
    string += 'Hola Coders! '
  }

  res.json({ message: string })
})

router.post('/', (req, res) => {
  const { first_name, last_name, email } = req.body

  if (!first_name || !last_name || !email) {
    CustomError.createError({
      name: TYPES_ERRORS.USER_CREATION_ERROR,
      cause: generateUserErrorInfo({ first_name, last_name, email }),
      message: 'Error trying to create user',
      code: EnumErrors.INVALID_TYPES_ERROR,
    })
  }

  const user = {
    first_name,
    last_name,
    email,
  }

  users.push(user)

  res.json({ message: user })
})

module.exports = router
