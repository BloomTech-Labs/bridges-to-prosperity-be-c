const fs = require('fs');
// read JSON object from file
// var seedData = {}
const jsData = () => {
    fs.readFile('results.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }

      // parse JSON object
      var seedData = JSON.parse(data.toString());
      return seedData;
    });
}

console.log(jsData())
// module.exports = seedData