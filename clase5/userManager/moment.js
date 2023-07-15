const moment = require('moment')

console.log(moment())

const birthday = moment('1990-01-31', 'YYYY-MM-DD')

console.log(birthday.isValid())

console.log(moment().diff(birthday, 'days'))
