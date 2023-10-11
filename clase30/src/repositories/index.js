const MessageRepository = require('./message.repository')
const MessageAdapter = require('../adapters/factory')

const messageRepository = new MessageRepository(new MessageAdapter())

module.exports = messageRepository
