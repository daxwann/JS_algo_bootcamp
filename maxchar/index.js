// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let max = 0;
	let maxChar = '';
	let charCount = {}

	for (let char of str) {
		// update character count
		charCount[char] = charCount[char] + 1 || 1;

		// update max count and max char
		if (charCount[char] > max) {
			max = charCount[char];
			maxChar = char;
		}
	}

	return maxChar;
}

module.exports = maxChar;
