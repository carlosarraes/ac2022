const fs = require('fs');

// prettier-ignore
const [rawStacks, rawInstructions] = fs.readFileSync('./data.txt', 'utf8').toString().split('\n\n');

// Parser
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
const linesTwo = [...lines];
const rawMoves = rawInstructions.split('\n');
const movesNum = [];

for (const move of rawMoves) {
  const num = move.match(/\d+/g);
  movesNum.push(num);
}

// Part 1
const partOne = (matrix) => {
  const movePiece = (arr) => {
    const [move, from, to] = arr;
    let count = Number(move);
    while (count >= 1) {
      const box = matrix[from - 1].slice(-3);
      matrix[from - 1] = matrix[from - 1].slice(0, -3);
      matrix[to - 1] += box;
      count--;
    }
  };

  for (const moveNum of movesNum) {
    movePiece(moveNum);
  }

  let result = '';
  for (const letter of matrix) {
    result += letter.slice(-2, -1);
  }

  return result;
};

console.log('One:', partOne(lines));

// Part 2
const partTwo = (matrix) => {
  const movePieceX = (arr) => {
    const [move, from, to] = arr;
    const box = matrix[from - 1].slice(-3 * move);
    matrix[from - 1] = matrix[from - 1].slice(0, -3 * move);
    matrix[to - 1] += box;
  };

  for (const moveNum of movesNum) {
    movePieceX(moveNum);
  }

  let result = '';
  for (const letter of matrix) {
    result += letter.slice(-2, -1);
  }

  return result;
};

console.log('Two:', partTwo(linesTwo));
