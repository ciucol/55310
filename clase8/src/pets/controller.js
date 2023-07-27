const { Router } = require('express')
const uploader = require('../utils/multer')

const router = Router()

router.get('/', (req, res) => {
  const { limit } = req.query
  res.json({ message: 'pets' })
})

router.get('/:id', (req, res) => {
  res.json({ message: `pets ${req.params.id}` })
})

router.post('/', uploader.single('file'), (req, res) => {
  console.log(req.body)

  const user = req.body
  user.profile = req.file.path

  console.log(JSON.parse(user))

  res.json({ message: `${user}` })
})

router.put('/:id', (req, res) => {
  console.log(req.body)
  res.json({ message: `update user` })
})

router.delete('/:id', (req, res) => {
  res.json({ message: `delete user ${req.params.id}` })
})

module.exports = router
