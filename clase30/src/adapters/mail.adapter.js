const { userMail } = require('../configs')
const transport = require('../utils/nodemailer.util')

class MailAdapter {
  async sendMessage(messageInfo) {
    await transport.sendMail({
      from: userMail,
      to: messageInfo.email,
      subject: `${messageInfo.name} bienvenido a nuestra plataforma!`,
      html: `
        <div>
          <h1>Hola ${messageInfo.fullname}, que gusto que estés acá!!!</h1>
  
          <h4>Este perrito es para ti</h4>
          <img src="cid:perrito">
        </div>
      `,
      attachments: [
        {
          filename: 'perrito.jpg',
          path: process.cwd() + '/src/images/perrito.jpg',
          cid: 'perrito',
        },
      ],
    })
  }
}

module.exports = MailAdapter
