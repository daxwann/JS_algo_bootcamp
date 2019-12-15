// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let widthArr = [];
	let arr = [];
	let counter = 0;
	let levelCount = 0;

	if (root) {
		arr.push(root);
		counter += 1;
		widthArr.push(1);
	}

	while (arr.length > 0) {
		let node = arr.shift();

		if (counter > 0) {
			levelCount += node.children.length;
			counter--;
		}

		if (counter === 0 && levelCount > 0) {
			widthArr.push(levelCount);
			counter = levelCount;
			levelCount = 0;
		}

		arr = arr.concat(node.children);
	}

	return widthArr;
}

module.exports = levelWidth;
