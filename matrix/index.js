// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function findNextCoord(currCoord, currDir) {
	const moves = {
		left: [-1, 0],
		right: [1, 0],
		up: [0, -1],
		down: [0, 1]
	}

	let [x, y] = currCoord;
	let [dX, dY] = moves[currDir];

	return [x + dX, y + dY];
}

function rotateDir(currDir) {
	const directions = ["right", "down", "left", "up"];

	let idx = directions.indexOf(currDir);

	return directions[(idx + 1) % 4]
}

function isComplete(matrix, currCoord) {
	leftMove = findNextCoord(currCoord, "left");
	rightMove = findNextCoord(currCoord, "right");
	upMove = findNextCoord(currCoord, "up");
	downMove = findNextCoord(currCoord, "down");

	if (isValidMove(matrix, currCoord) ||
			isValidMove(matrix, leftMove) || 
			isValidMove(matrix, rightMove) || 
			isValidMove(matrix, upMove) || 
			isValidMove(matrix, downMove)) {
		return false;
	}

	return true;
}

function isValidMove(matrix, nextCoord) {
	let [x, y] = nextCoord;

	if (!matrix[y] || !matrix[y][x]) {
		return false;
	}

	return matrix[y][x] === 'e' ? true : false;
}

function fillSpiral(matrix, currCoord = [0, 0], currNum = 1, currDir = "right") {
	// fill current coordinate with number and increment number
	let [x, y] = currCoord;
	matrix[y][x] = currNum;
	currNum += 1;

	// check if spiral is complete
	if (isComplete(matrix, currCoord)) {
		return matrix;
	}

	// find next coordinate
	nextCoord = findNextCoord(currCoord, currDir);

	// if next coordinate is not valid
	if (!isValidMove(matrix, nextCoord)) {
		// change direction and set next coordinate
		currDir = rotateDir(currDir);
		nextCoord = findNextCoord(currCoord, currDir);
	}

	//continue to next coordinate
	return fillSpiral(matrix, nextCoord, currNum, currDir);
}

function matrix(n) {
	//create empty matrix of size n x n
	let spiral = new Array(n);

	for (let i = 0; i < n; i++) {
		spiral[i] = new Array(n);
		for (let j = 0; j < n; j++) {
			spiral[i][j] = "e"
		}
	}

	spiral = fillSpiral(spiral)

	console.log(spiral);
	return spiral;
}

module.exports = matrix;
