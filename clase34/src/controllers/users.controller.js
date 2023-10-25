const { Router } = require('express')

const router = Router()

router.post('/', (req, res) => {
  try {
    req.logger.info(JSON.stringify(req.body))
    const { name, lastname, email, password } = req.body

    if (!name || !lastname || !email || !password) {
      const error = new Error('Bad Request!!!')
      error.code = 17509

      throw error
    }

    res.json({ payload: 'users' })
  } catch (error) {
    if (error.code === 17509) {
      req.logger.debug('el code es 17509')
      req.logger.warning('Faltan parámetros en la request del cliente')
      // console.warn('Faltan parámetros en la request del cliente')
      return res.status(400).json({ error: error.message })
    }
  }
})

module.exports = router
