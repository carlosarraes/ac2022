const fs = require('fs');

const data = fs
  .readFileSync('./data.txt', 'utf8')
  .replaceAll(' ', '')
  .split('\n');

console.log(data);
