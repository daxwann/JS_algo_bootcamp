// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
function palindrome(str) {
	const len = str.length;

	for (let i = 0; i < Math.floor(len / 2); i++) {
		if (str.charAt(i) !== str.charAt(len - 1)) {
			return false;
		}

		return true;
	}
}

// Alternative solution
// function palindrome(str) {
// 	return str.split('').every((char, i) => {
// 		return char === str[str.length - 1 - i];
// 	})
// }

module.exports = palindrome;
