const fs = require('fs');
// read JSON object from file
// var seedData = {}
const jsData = () => {
    var seedData
    fs.readFile('results.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }

      // parse JSON object
      seedData = JSON.parse(data.toString());
      return seedData;
    });
}

console.log(jsData())
// module.exports = seedData