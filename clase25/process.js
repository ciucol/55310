const process = require('process')

// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.memoryUsage())
// console.log(process.env)
// console.log(process.version)
console.log(process.argv.slice(2))

const port = process.argv[2]

console.log(`El puerto es: ${port}`)

process.on('exit', code => {})

process.exit(1)
