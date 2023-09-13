const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')
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
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/55310?retryWrites=true&w=majority',
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 3600,
    }),
    secret: 'miSecreto',
    resave: false,
    saveUninitialized: false,
  })
)
initilizePassport()
app.use(passport.initialize())
app.use(passport.session())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

mongoConnect()

router(app)

app.listen(3000, () => {
  console.log(3000)
})
