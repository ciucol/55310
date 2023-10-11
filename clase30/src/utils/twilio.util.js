const twilio = require('twilio')
const { twilioAccountSid, twilioAuthToken } = require('../configs')

const client = twilio(twilioAccountSid, twilioAuthToken)

module.exports = client
