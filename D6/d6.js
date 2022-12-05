const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf8').split('\n');

console.log(data);
