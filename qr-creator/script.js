
let pixelSize = 10;

// define primary and secondary colors
let primCol = 0;
let secCol = 255;

// we shall be implementing a version 1 QR code creator

let sCoord; // starting coordinates
// total no. of rows/cols required = 4 x version_num + 17
// size of the corner eyes will be [7x7] rows/cols

let totalRC = 21;

function drawPixel(x, y) {
	rect(x, y, pixelSize);
}

function drawEye(x, y) {
	// outer
	for (let i = 0; i < 7; i++) {
		for (let j = 0; j < 7; j++) {
			if (i == 0 || j == 0 || i == 6 || j == 6) {
				fill(primCol);
			} else {
				noFill();

			}
			drawPixel(x + i * pixelSize, y + j * pixelSize, pixelSize);
		}
	}
	// inner
	for (let i = 2; i < 2 + 3; i++) {
		for (let j = 2; j < 2 + 3; j++) {
			fill(0);
			drawPixel(x + i * pixelSize, y + j * pixelSize, pixelSize);

		}

	}
}

function drawThreeEyes() {
	drawEye(sCoord.x, sCoord.y);
	drawEye(sCoord.x + pixelSize * 7 * 2, sCoord.y);
	drawEye(sCoord.x, sCoord.y + pixelSize * 7 * 2);
}

function setup() {
	createCanvas(400, 400);
	sCoord = { x: 50, y: 50 };
	noStroke();
	console.log(removeLeadingZeros('000001112'))
}




function draw() {
	background(150);
	drawThreeEyes();
}


// try and implement format code of the qr
// document the method:
// 1. Format strings are 15 bits long 
// 2. Error correction level (L/M/Q/H) is encoded with mask pattern (8 standard patterns) to generate a 5 bit long code .
// 3. this code is then used to generate a 15 bit long code

// LMQH Binary Equivalence
// L ->  1 (01)
// M ->  0 (00)
// Q ->  3 (11)
// H ->  2 (10)


// ------------MASK PATTERNS---------------
// 0(000)	(row + column) mod 2 == 0
// 1(001)	(row) mod 2 == 0
// 2(010)	(column) mod 3 == 0
// 3(011)	(row + column) mod 3 == 0
// 4(100)	( floor(row / 2) + floor(column / 3) ) mod 2 == 0
// 5(101)	((row * column) mod 2) + ((row * column) mod 3) == 0
// 6(110)	( ((row * column) mod 2) + ((row * column) mod 3) ) mod 2 == 0
// 7(111)	( ((row + column) mod 2) + ((row * column) mod 3) ) mod 2 == 0

// FOR THIS PROJECT, let's choose L and Mask Pattern 1 (001)
// our code = 01001

// standard generator polynomial:
// x^10 + x^8 + x^5 + x^4 + x^2 + x + 1
// equiv binary: 10100110111 (11bits)



let genPol = '10100110111';
let ourCode = '01001';

