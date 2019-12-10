// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let step = '';
  
  for (let i = 0; i < n; i++) {
    step += ' ';
  }

  for (let i = 0; i < n; i++) {
    step = step.substr(0, i) + '#' + step.substr(i + 1);
    console.log(step);
  }
}

module.exports = steps;
