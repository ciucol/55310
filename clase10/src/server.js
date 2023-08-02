const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars') // nos sirve para definir la extensión por defecto de la plantilla que usemos

router(app)

module.exports = app
