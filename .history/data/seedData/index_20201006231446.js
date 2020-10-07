const fs = require('fs');
// read JSON object from file
// var seedData = {}
var x = 
fs.readFile('results.json', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
    var seedData = JSON.parse(data.toString());
    x = seedData

});

console.log(seedData)
module.exports = {x,}