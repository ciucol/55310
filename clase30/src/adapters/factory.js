const { environment } = require('../configs')

switch (environment) {
  case 'dev':
    console.log('nodemailer adapter')
    module.exports = require('../adapters/mail.adapter')
    break

  case 'prod':
    console.log('twilio adapter')
    module.exports = require('../adapters/sms.adapter')
    break
}
