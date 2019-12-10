// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let revInt = 0;
	let neg = false;
	
	// convert and flag negative num 
	if (n < 0) {
		n *= -1;
		neg = true;
	}
	
	// for second to last digit
	while (n > 9) {
		revInt += n % 10;
		n = Math.floor(n / 10);
		revInt *= 10;
	}

	// for first digit
	revInt += n;

	// turn back to negative if it's originally negative
	if (neg) {
		revInt = revInt * -1
	}

	return revInt;
}

module.exports = reverseInt;
