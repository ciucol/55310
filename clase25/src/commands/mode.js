const { Command } = require('commander')

function parseArgs() {
  const program = new Command()

  program.option('-m --mode <mode>', 'Modo de la app', 'local').parse()

  return program.opts()
}

module.exports = parseArgs
