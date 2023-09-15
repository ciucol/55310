const jwt = require('jsonwebtoken')

const secretKey = 'mySecret'

const generateToken = user => {
  return jwt.sign({ user }, secretKey, { expiresIn: '300s' })
}

const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(401).json({ status: 'error', error: 'Unauthorized' })

  const token = authHeader.split(' ')[1]

  jwt.verify(token, secretKey, (error, credentials) => {
    if (error)
      return res.status(403).json({ status: 'error', error: 'Forbidden' })

    req.user = {
      ...credentials.user,
      role: 'admin',
    }

    next()
  })
}

module.exports = {
  generateToken,
  authToken,
}
