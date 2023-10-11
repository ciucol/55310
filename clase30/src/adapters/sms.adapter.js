const { twilioSmsNumber } = require('../configs')
const client = require('../utils/twilio.util')

class SmsAdapter {
  async sendMessage(messageInfo) {
    await client.messages.create({
      body: `${messageInfo.name} bienvenido a nuestra plataforma!`,
      from: twilioSmsNumber,
      to: messageInfo.number,
    })
  }
}

module.exports = SmsAdapter
