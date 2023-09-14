const express = require('express')
const cookieParser = require('cookie-parser')
const handlebars = require('express-handlebars')
const mongoConnect = require('./db')
const router = require('./router')
const initilizePassport = require('./config/passport.config')
const passport = require('passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())

initilizePassport()
app.use(passport.initialize())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

mongoConnect()

router(app)

app.listen(3000, () => {
  console.log(3000)
})
