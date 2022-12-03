const fs = require('fs');

const data = fs
  .readFileSync('./data.txt', 'utf8')
  .replaceAll(' ', '')
  .split('\n');

const charArray = {};
const a = 97;
for (let i = 0; i < 26; i++) charArray[String.fromCharCode(a + i)] = i + 1;
const b = 65;
for (let i = 0; i < 26; i++) charArray[String.fromCharCode(b + i)] = i + 27;

const findKey = (str) => {
  const partOne = str.slice(0, str.length / 2);
  const partTwo = str.slice(str.length / 2);
  let key = '';
  for (const letter of partOne) {
    for (const checkLetter of partTwo) {
      if (letter === checkLetter) {
        key = letter;
      }
    }
  }
  return key;
};

const findPriority = (obj, key) => {
  return obj[key];
};

let priority = 0;
for (const sack of data) {
  const key = findKey(sack);
  const value = findPriority(charArray, key);
  priority += value;
}

console.log(priority);

const aData = [];
let tempData = [];
let count = 0;
for (let i = 0; i < data.length; i++) {
  if ((i + 1) % 3 === 0) {
    tempData[count] = data[i];
    aData.push(tempData);
    count = 0;
    tempData = [];
  } else {
    tempData[count] = data[i];
    count++;
  }
}

const findKeyX = (arr) => {
  let keyX = '';
  for (const key of arr[0]) {
    if (arr[1].includes(key) && arr[2].includes(key)) {
      keyX = key;
    }
  }
  return keyX;
};

priority = 0;
for (const sack of aData) {
  const key = findKeyX(sack);
  const value = findPriority(charArray, key);
  priority += value;
}

console.log(priority);
