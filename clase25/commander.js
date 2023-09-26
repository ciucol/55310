const { Command } = require('commander')

const program = new Command()

program
  .option('-d', 'Variable para debug', false)
  .option('-p --port <port>', 'Puerto del server', 3000)
  .option('-m --mode <mode>', 'Modo de trabajo', 'local')
  .requiredOption('-u <user>', 'Usuario', 'No se ha declarado un usuario')
  .option('-l --letters [letters...]', 'Palabras')
  .parse()

program.help()

console.log('Options: ', program.opts())
console.log('Remaining arguments: ', program.args)
