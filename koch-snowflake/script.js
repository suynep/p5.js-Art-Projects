
// function traingleGen(blcX, blcY, len, rot) { // blcX = bottom-left-corner X
// 	push();
// 	fill(255);
// 	beginShape();
// 	vertex(blcX, blcY);
// 	vertex(blcX + cos(rot) * len, blcY - sin(rot) * len);
// 	vertex(blcX + cos(60 + rot) * len, blcY - sin(60 + rot) * len);
// 	endShape();
// 	pop();
// }


function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
}

let bck = 50;

function draw() {
	background(bck);
}

// first let's create a function to generate a triangle, based on rotation offset of it's base 

function drawLine(x, y, len, rot) {
	push();
	stroke(255);
	line(x, y, x + cos(rot) * len, y + sin(rot) * len);
	pop();
}


function divideLine(x, y, len, rot, iter) {

	if (iter == 0) {
		drawLine(x, y, len, 0);
	}
	else {
		divideLine(x, y, len / 3, (iter - 1))
	}





}


function genKochFlakes(iter, len) {
	let currCount = 0;
	let centerX = width / 2 - len / 2;
	let centerY = height / 2 + Math.sqrt(3) * len / 2;

	while (currCount < iter) {
		for (let i = 0; i < 3 * Math.pow(4, currCount); i++) {
			drawLine(centerX, centerY, len, 0);
			drawLine(centerX)
		}

		currCount += 1;

	}





}