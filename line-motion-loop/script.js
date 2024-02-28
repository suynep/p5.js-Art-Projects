
const COLORS = {
	black: 50,
	white: 250
}

const CANVAS = {
	w: 800,
	h: 800
}


function drawLine(leftX, rightX, yInit) {
	line(leftX, yInit, rightX, yInit);
}

let offset = 100;
let lx = offset;
let rx = CANVAS.w - offset;
// let yInit = 10;

function moveLine(downMotion, yInit) {
	let incrementVal = 2;
	drawLine(lx, rx, yInit);
	lx -= incrementVal;
	rx += incrementVal;
	yInit += downMotion;
}

function setup() {
	createCanvas(CANVAS.w, CANVAS.h);
	stroke(COLORS.white);
}

let i = 0.1;
function draw() {
	background(COLORS.black);

	for (let i = 0; i < 100; i++) {
		moveLine(i, i + 10)
	}
	
}
