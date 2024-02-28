
let COLORS;



function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100);
	COLORS = [color(120, 0, 20), color(0, 0, 100)];
	stroke(COLORS[1]);
	frameRate(10);
}

let h = 0;
let b = 0;
function draw() {
	
	background(COLORS[0]);
	let num = 20;

	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			b += map (j * width / num, 0, width, 0, 100);
			let col = color(h, 50, b);
			drawOneTile(width / num, createVector(i * width / num, j * width / num), col);
			if (i == j) {
				b = 100;

			}
		}
	}
		h = (h + 5) % 360;

	// for (let i = 0; i < num; i++) {
	// 	for (let j = 0; j < num; j++) {







}


function drawOneTile(size, pos, col) {

	let rt = size / 2;
	let dt = size / 2;
	push();
	noStroke();

	translate(pos.x + rt, pos.y + dt);
	fill(col);
	circle(0, 0, size);
	pop();


}






