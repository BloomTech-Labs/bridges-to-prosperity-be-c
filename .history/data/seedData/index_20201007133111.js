const data = require('./results.json')

const obj = JSON.parse(JSON.stringify(data))

const y = Object.values(obj)
// module.exports = obj