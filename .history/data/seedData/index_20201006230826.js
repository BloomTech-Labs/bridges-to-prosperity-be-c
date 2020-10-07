const fs = require('fs');
var seedData 
// read JSON object from file
// var seedData = {}
fs.readFile('results.json', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
  const seedData = JSON.parse(data.toString());

});

console.log(seedData)
// module.exports = seedData