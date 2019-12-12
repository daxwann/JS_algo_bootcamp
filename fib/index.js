// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative -- runtime: O(n)
// function fib(n) {
//   let prevNum = 0;
//   let currNum = 1;

//   if (n === 0) {
//     return prevNum;
//   } else if (n === 1) {
//     return currNum;
//   }

//   for (let i = 2; i <= n; i++) {
//     let tmp = currNum;
//     currNum = prevNum + currNum;
//     prevNum = tmp;
//   }

//   return currNum;
// }

// recursive -- runtime O(2^n)
// function fib(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }

//   return fib(n - 2) + fib(n - 1);
// }

// recursive solution with memoization
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
}

function memoize(fn) {
  const cache = {};

  return function(...args) {
    //return result if found in cache
    if (cache[args]) {
      return cache[args];
    }

    // cache and return result
    const result = fn.apply(this, args);
    cache[args] = result;

    return result
  }
}

fib = memoize(fib)

module.exports = fib;
