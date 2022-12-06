const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf8').split('\n').join('');

const isUnique = (str) => {
  return new Set(str).size === str.length;
};

const checkChar = (str) => {
  const arrStr = str.split('');
  const result = '';
  for (let i = 0; i < arrStr.length - 3; i++) {
    let a = '';
    const count = i + 4;
    for (let j = i; j < count; j++) {
      a += arrStr[j];
    }
    if (isUnique(a)) return i + 4;
  }
  return result;
};

const checkCharTwo = (str) => {
  const arrStr = str.split('');
  for (let i = 0; i < arrStr.length - 13; i++) {
    let a = '';
    const count = i + 14;
    for (let j = i; j < count; j++) {
      a += arrStr[j];
    }
    if (isUnique(a)) return i + 14;
  }
};

console.log(checkChar(data));
console.log(checkCharTwo(data));
