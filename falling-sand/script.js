let grid;

function setup() {
	createCanvas(800, 800);
	grid = new Grid(width, height, 20);
	console.log(grid.arr);
}

function draw() {
	background(50);
	grid.updateGrid((mouseX % 800) / 20, (mouseY % 800)/ 20);
	grid.drawState();
	// console.log(mouseX, mouseY);
	// console.log((mouseX % 800) / 20, (mouseY % 800)/ 20)
	if (mouseIsPressed == true) {
		grid.saveState();
	}
}

function mouseClicked() {
	grid.saveState();
}





