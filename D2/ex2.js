const fs = require('fs');

const data = fs
  .readFileSync('./day2.txt', 'utf8')
  .replaceAll(' ', '')
  .split('\n');

/*
AX = Rock x Rock (4)
AY = Rock x Paper (8)
AZ = Rock x Scissors (3)
BX = Paper x Rock (1)
BY = Paper x Paper (5)
BZ = Paper x Scissors (9)
CX = Scissors x Rock (7)
CY = Scissors x Paper (2)
CZ = Scissors x Scissors (6)
*/

const results = {};

for (const game of data) {
  if (results[game]) {
    results[game] += 1;
  } else {
    results[game] = 1;
  }
}

const pointsOne = {
  AX: 4,
  AY: 8,
  AZ: 3,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 7,
  CY: 2,
  CZ: 6,
};

let scoreOne = 0;

for (const key in results) {
  scoreOne += results[key] * pointsOne[key];
}

console.log(scoreOne);

// Part 2

/*
  A Rock
  B Paper
  C Scissors
  X Lose
  Y Draw
  Z Win
*/

const pointsTwo = {
  AX: 3,
  BX: 1,
  CX: 2,
  AY: 4,
  BY: 5,
  CY: 6,
  AZ: 8,
  BZ: 9,
  CZ: 7,
};

let scoreTwo = 0;

for (const key in results) {
  scoreTwo += results[key] * pointsTwo[key];
}

console.log(scoreTwo);
