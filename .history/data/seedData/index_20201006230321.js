const fs = require('fs');

// read JSON object from file
fs.readFile('results.json', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
  const seedData = [JSON.parse(data.toString());

  // print JSON object
  console.log(user);
});