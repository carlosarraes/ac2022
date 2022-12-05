const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf8').split('\n');

const cleanUp = (arr) => {
  const pairs = arr.split(',');
  const firstSplit = pairs[0].split('-');
  const secondSplit = pairs[1].split('-');
  let contains = false;
  if (
    Number(firstSplit[0]) >= Number(secondSplit[0]) &&
    Number(firstSplit[0]) <= Number(secondSplit[1]) &&
    Number(firstSplit[1]) >= Number(secondSplit[0]) &&
    Number(firstSplit[1]) <= Number(secondSplit[1])
  ) {
    contains = true;
  } else if (
    Number(secondSplit[0]) >= Number(firstSplit[0]) &&
    Number(secondSplit[0]) <= Number(firstSplit[1]) &&
    Number(secondSplit[1]) >= Number(firstSplit[0]) &&
    Number(secondSplit[1]) <= Number(firstSplit[1])
  ) {
    contains = true;
  }
  return contains;
};

let count = 0;

for (const pair of data) {
  if (cleanUp(pair)) count++;
}

console.log(count);

// partTwo

const noOverlap = (arr) => {
  const pairs = arr.split(',');
  const firstSplit = pairs[0].split('-');
  const secondSplit = pairs[1].split('-');
  let noOver = false;
  if (
    Number(firstSplit[0]) <= Number(secondSplit[0]) &&
    Number(firstSplit[1]) >= Number(secondSplit[0])
  ) {
    noOver = true;
  } else if (
    Number(secondSplit[0]) <= Number(firstSplit[0]) &&
    Number(secondSplit[1]) >= Number(firstSplit[0])
  ) {
    noOver = true;
  }
  return noOver;
};

count = 0;
for (const pair of data) {
  if (noOverlap(pair)) count++;
}

console.log(count);
