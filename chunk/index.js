// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
	let start = 0;
	let end = 1;
	let subArr = [];

	arr.forEach((val, i) => {
		end = i + 1;
		
		if (end % size === 0) {
			subArr.push(arr.slice(start, end));
			start = end;
		}
	})

	if (start !== end) {
		subArr.push(arr.slice(start, end));
	}

	return subArr;
}

module.exports = chunk;
