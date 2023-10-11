const nodemailer = require('nodemailer')
const { userMail, passwordMail } = require('../configs')

const transport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: userMail,
    pass: passwordMail,
  },
})

module.exports = transport
