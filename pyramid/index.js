// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function displayStep(row, totalSteps) {
  const paddingCount = totalSteps - row;
  const brickCount = row * 2 - 1;
  let padding = ' '.repeat(paddingCount);
  let bricks = '#'.repeat(brickCount);

  console.log(padding + bricks + padding);
}

function pyramid(n, row = 1) {
  if (row > n) {
    return;
  }

  if (row <= n) {
    displayStep(row, n)
  }

  pyramid(n, row + 1)
}

module.exports = pyramid;
