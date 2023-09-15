const { Router } = require('express')

const router = Router({ caseSensitive: true })

router.param('word', (req, res, next, word) => {
  console.log(word, ' desde el router param')

  req.params.word = Number(word)

  next()
})

// function convertNumber(req, res, next) {
//   req.params.word = Number(req.params.word)

//   next()
// }

router.get('/dictionary/:word', (req, res) => {
  console.log(req.params.word)
  const users = [{ name: 'Mate' }, { name: 'Titín' }, { name: 'Bebé nuevo' }]

  res.json({ message: users })
})

module.exports = router
