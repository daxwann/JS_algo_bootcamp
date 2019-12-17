// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	let sorted = false;
	let length = arr.length;
	let sortedArr = [...arr];

	if (length === 1) {
		return true;
	}

	while (sorted === false) {
		sorted = true;
		for (let i = 0; i < length - 1; i++) {
			if (sortedArr[i] > sortedArr[i + 1]) {
				sorted = false;
				let tmp = sortedArr[i];
				sortedArr[i] = sortedArr[i + 1];
				sortedArr[i + 1] = tmp;
			}
		}
	}

	return sortedArr;
}

function selectionSort(arr) {
	let arrLen = arr.length;
	let sortedArr = [...arr];

	for (let i = 0; i < arrLen - 1; i++) {
		let indexOfMin = i;

		for (let j = i + 1; j < arrLen; j++) {
			if (sortedArr[j] < sortedArr[indexOfMin]) {
				indexOfMin = j;
			}
		}

		if (indexOfMin !== i) {
			let tmp = sortedArr[i];
			sortedArr[i] = sortedArr[indexOfMin];
			sortedArr[indexOfMin] = tmp;
		}
	}

	return sortedArr;
}

function mergeSort(arr) {
	let arrLen = arr.length;
	let sortedArr = [...arr];

	if (arrLen < 2) {
		return sortedArr;
	}

	let mid = Math.floor(arrLen / 2);
	let left = mergeSort(sortedArr.slice(0, mid));
	let right = mergeSort(sortedArr.slice(mid));

	sortedArr = merge(left, right);
	
	return sortedArr;
}

function merge(left, right) {
	let merged = [];

	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			merged.push(left.shift());
		} else {
			merged.push(right.shift());
		}
	}

	if (left.length > 0) {
		merged = merged.concat(left);
	}

	if (right.length > 0) {
		merged = merged.concat(right);
	}

	return merged;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
