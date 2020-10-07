const fs = require('fs');

// read JSON object from file
// var seedData = {}
fs.readFile('results.json', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
  seedData = JSON.parse(data.toString());

});

console.log(seedData)
// module.exports = seedData