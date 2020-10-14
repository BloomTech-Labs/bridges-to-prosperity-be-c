const data = require('./results.json');

const obj = JSON.parse(JSON.stringify(data));

const x = Object.values(obj);
console.log(x);
module.exports = x;
