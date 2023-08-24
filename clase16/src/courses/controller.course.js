const { Router } = require('express')
const Courses = require('../models/courses.model')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const courses = await Courses.find()
    res.json({ message: courses })
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, description, grade } = req.body

    const courseInfo = {
      name,
      description,
      grade,
    }

    const newCourse = await Courses.create(courseInfo)

    res.json({ message: newCourse })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
