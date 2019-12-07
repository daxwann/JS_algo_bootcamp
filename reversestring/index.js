// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	const len = str.length;
	let reversedArr = [];

	for (let i = 0; i < len; i++) {
		reversedArr.unshift(str.charAt(i))
	}

	return reversedArr.join("");
}

module.exports = reverse;
