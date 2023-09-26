const dotenv = require('dotenv')

// function loadConfig(mode) {
//   dotenv.config({
//     path: `.env.${mode}`,
//   })

//   return {
//     port: process.env.PORT,
//     environment: process.env.ENVIRONMENT,
//   }
// }

// module.exports = loadConfig

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  port: process.env.PORT,
  environment: process.env.ENVIRONMENT,
}
