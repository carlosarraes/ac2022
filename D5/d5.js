const fs = require('fs');

// prettier-ignore
const [rawStacks, rawInstructions] = fs.readFileSync('./data.txt', 'utf8').toString().split('\n\n');

const rawLines = rawStacks.split('\n');
rawLines.pop();

const parserClean = (raw, x, y) => {
  const a = [];

  for (const line of raw) {
    a.push(line.slice(x, y));
  }

  const cleanA = a
    .filter((line) => line !== '   ')
    .reverse()
    .join('');

  return cleanA;
};

const lines = [];

for (let i = 0; i <= rawLines.length * 4; i += 4) {
  lines.push(parserClean(rawLines, i, i + 3));
}

const rawMoves = rawInstructions.split('\n');
const movesNum = [];

for (const move of rawMoves) {
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
  const box = lines[from - 1].slice(-3 * move);
  lines[from - 1] = lines[from - 1].slice(0, -3 * move);
  lines[to - 1] += box;
  return 'done';
};

for (const moveNum of movesNum) {
  movePieceX(moveNum);
}

for (const letter of lines) {
  console.log(letter.slice(-2, -1));
}
