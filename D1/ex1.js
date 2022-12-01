const fs = require('fs');

const data = fs.readFileSync('./day1.txt', 'utf8');
const dataSplit = data.split('\n');

const eachElf = [];
let calories = 0;

// Part 1
for (const num of dataSplit) {
  if (num) {
    calories += Number(num);
  } else {
    eachElf.push(calories);
    calories = 0;
  }
}

// Part 2
const firstElf = Math.max(...eachElf);
eachElf.splice(eachElf.indexOf(firstElf), 1);
const secondElf = Math.max(...eachElf);
eachElf.splice(eachElf.indexOf(secondElf), 1);
const thirdElf = Math.max(...eachElf);
eachElf.splice(eachElf.indexOf(thirdElf), 1);

const total = firstElf + secondElf + thirdElf;
console.log(total);
