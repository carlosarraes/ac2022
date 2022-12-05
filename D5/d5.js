const fs = require('fs');

const matrix = fs.readFileSync('./matrix.txt', 'utf8').split('\n');
const moves = fs.readFileSync('./data.txt', 'utf8').split('\n');
const movesNum = [];

for (const move of moves) {
  const num = move.match(/\d+/g);
  movesNum.push(num);
}

// Part 1
// function movePiece(arr) {
//   const [move, from, to] = arr;
//   let count = Number(move);
//   while (count >= 1) {
//     const box = matrix[from - 1].slice(-3);
//     matrix[from - 1] = matrix[from - 1].slice(0, -3);
//     matrix[to - 1] += box;
//     count--;
//   }
//   return 'done';
// }

// for (const moveNum of movesNum) {
//   movePiece(moveNum);
// }

// for (const letter of matrix) {
//   console.log(letter.slice(-3));
// }

// Part 2
const movePieceX = (arr) => {
  const [move, from, to] = arr;
  const box = matrix[from - 1].slice(-3 * move);
  matrix[from - 1] = matrix[from - 1].slice(0, -3 * move);
  matrix[to - 1] += box;
  return 'done';
};

for (const moveNum of movesNum) {
  movePieceX(moveNum);
}

for (const letter of matrix) {
  console.log(letter.slice(-3));
}
