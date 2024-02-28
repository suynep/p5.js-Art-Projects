
let cells = [];
let w;
let cellNum = 10;
let y = 0;
let maxIter = cellNum;

function setup() {
	background(50);
	createCanvas(800, 800);
	frameRate(4);
	for (let i = 0; i < cellNum; i++) {
		cells.push(floor(random(0, 2)));
	}
	w = width / cells.length;
	saveGif('mySketch', 5);
}


let check = 0; // a variable to check if the draw loop number exceeds the size of the maxIter

function draw() {
	
	for (let i = 0; i < cells.length; i++) {
		cells[i] == 1 ? fill(0) : fill(240);
		rect(i * w, y, w, w);
	}
	y = y + w;

	let nextCells = cells;
	nextCells[0] = cells[0];
	nextCells[nextCells.length - 1] = cells[cells.length - 1];
	for (let i = 1; i < cells.length - 1; i++) {
		let nextCellVal = calcState(cells[i - 1], cells[i], cells[i + 1]);
		nextCells[i] = nextCellVal;
	}
	console.log(nextCells)
	cells = nextCells;
	check += 1;
	if (check > maxIter) {
		noLoop();
	}
}


function calcState(a, b, c) {
	return (a + b + c) % 2;
}
