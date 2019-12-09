// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let charMap = {};
  const lowerCaseStrA = stringA.toLowerCase();
  const lowerCaseStrB = stringB.toLowerCase();
  debugger

  for (let char of lowerCaseStrA) {
    if (char.match(/[a-z]/)) {
      charMap[char] = charMap[char] + 1 || 1
    }
  }

  for (let char of lowerCaseStrB) {
    if (char.match(/[a-z]/)) {
      if (charMap[char]) {
        charMap[char] -= 1
      } else {
        charMap[char] = -1
      }
    }
  }

  return Object.values(charMap).every(count => count === 0);
}

anagrams("hello", "olleh");

module.exports = anagrams;
