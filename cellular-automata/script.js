
let cells = [];
let w;
let cellNum = 100;

function setup() {
	createCanvas(800, 800);
	frameRate(4);
	for (let i = 0; i < cellNum; i++) {
		cells.push(floor(random(0, 2)));
	}
	w = width / cells.length;
}

function draw() {
	background(50);
	
	for (let i = 0; i < cells.length; i++) {
		cells[i] == 1 ? fill(0) : fill(240);
		rect(i * w, height/2 - w / 2, w, w);
	}

	let nextCells = cells;
	nextCells[0] = cells[0];
	nextCells[nextCells.length - 1] = cells[cells.length - 1];
	for (let i = 1; i < cells.length - 1; i++) {
		let nextCellVal = calcState(cells[i - 1], cells[i], cells[i + 1]);
		nextCells[i] = nextCellVal;
	}
	cells = nextCells;
}


function calcState(a, b, c) {
	return (a + b + c) % 2;
}