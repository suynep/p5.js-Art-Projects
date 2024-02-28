function setup() {
	createCanvas(400, 400);
	noStroke();
}

function draw() {
	background(50);
	genTree(50, 50);
	genWater(100, 50);
	genSand(150, 50);
}
