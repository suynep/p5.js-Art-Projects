let COLORS;

class PerlinLine {
  constructor(initY, offset, xStep) {
    this.initY = initY;
    this.iter = 1;
    this.pVecArr = [];
    this.offset = offset;
    this.xStep = xStep;
    this.eraseFlag = true;
    this.reverseFlag = false;
  }

  drawNoisePoints() {
    for (let i = 3; i <= width + 100; i += this.xStep) {
      let val = noise(i, this.initY);
      let pVec = createVector(i, this.initY + val * this.offset);
      // console.log(val);
      stroke(color(30 + (i % 210), 40, map(this.initY, 0, width, 30, 100)));
      push();
      strokeWeight(8);
      point(pVec);
      pop();
      if (this.pVecArr.length <= Math.floor(width / this.xStep)) {
        this.pVecArr.push(pVec);
      }
    }
    // this.eraseFlag = false;
    // this.anotherIter = this.pVecArr.length;
  }

  joinPoints(arr) {
    push();
    strokeWeight(1);
    // stroke(COLORS[1]);
    for (let i = 1; i < arr.length; i++) {
      stroke(color(i % 360, 0, map(this.initY, 0, height, 20, 100)));
      line(arr[i - 1].x, arr[i - 1].y, arr[i].x, arr[i].y);
    }
    pop();
  }

  joinTwoConsecutive(a, b) {
    push();
    strokeWeight(1);
    // stroke(COLORS[1]);
    // stroke(color((this.iter + 30) % 360, 40, 100));
    line(a.x, a.y, b.x, b.y);
    pop();
  }

  drawLineFinal() {
    this.drawNoisePoints();
    this.joinTwoConsecutive(
      this.pVecArr[this.iter - 1],
      this.pVecArr[this.iter]
    );
    //
    this.joinPoints(this.pVecArr.slice(0, this.iter + 1));

    // if (this.iter < this.pVecArr.length - 1) {
    this.iter++;
    // }

    if (this.iter >= this.pVecArr.length) {
      // this.eraseLines(this.pVecArr.slice(this.anotherIter - 2, this.anotherIter - 1));
      // this.eraseConsecutive(this.pVecArr[this.anotherIter - 1], this.pVecArr[this.anotherIter - 2]);
      this.iter = this.pVecArr.length - 1;

      // this.eraseFlag = true;
      // this.anotherIter--;
    }
    // console.log(this.iter);
    this.drawNoisePoints();

    // console.log(this.pVecArr.length);
  }
  drawLineFinalReverse() {
    this.drawNoisePoints();
    this.joinTwoConsecutive(
      this.pVecArr[this.iter],
      this.pVecArr[this.iter - 1]
    );
    //
    this.joinPoints(this.pVecArr.slice(this.iter - 1, this.pVecArr.length));

    // if (this.iter < this.pVecArr.length - 1) {
    this.iter--;
    // }

    if (this.iter <= 0) {
      // this.eraseLines(this.pVecArr.slice(this.anotherIter - 2, this.anotherIter - 1));
      // this.eraseConsecutive(this.pVecArr[this.anotherIter - 1], this.pVecArr[this.anotherIter - 2]);
      this.iter = 0;

      // this.eraseFlag = true;
      // this.anotherIter--;
    }
    // console.log(this.iter);
    this.drawNoisePoints();

    // console.log(this.pVecArr.length);
  }

  eraseLines(arr) {
    push();
    strokeWeight(1);
    stroke(COLORS[0]);
    // stroke(COLORS[1]);
    for (let i = arr.length - 1; i > 0; i--) {
      line(arr[i].x, arr[i].y, arr[i - 1].x, arr[i - 1].y);
    }

    pop();
  }

  eraseConsecutive(a, b) {
    push();
    strokeWeight(1);
    // stroke(COLORS[1]);
    stroke(COLORS[0]);
    // stroke(color((this.iter + 30) % 360, 40, 100));
    line(a.x, a.y, b.x, b.y);
    pop();
  }

  polarityReverser() {
    this.reverseFlag = true;
  }
}

let perlinLines = [];
let numberOfLines = 60;

let time;

function setup() {
  createCanvas(800, numberOfLines * 10 + 50);
  frameRate(10);
  colorMode(HSB, 360, 100, 100);
  COLORS = [color(4, 2, 25)];
  time = frameCount;

  let incrVal = 0.05;
  for (let i = 0; i < numberOfLines; i++) {
    let niceLine = new PerlinLine(
      (i / 2) * incrVal * 10,
      20 + i * 1.5,
      Math.floor(numberOfLines - i / 1.7)
    );
    // console.log(line.pVecArr)
    perlinLines.push(niceLine);
    incrVal += 0.05;
    perlinLines[i].drawNoisePoints();
    console.log(perlinLines[i].pVecArr.length);
  }

}

function draw() {
  background(COLORS[0]);

  for (let i = 0; i < numberOfLines; i++) {
    // if (perlinLines[i].reverseFlag != false) {
    // if (perlinLines[i].iter != perlinLines[i].pVecArr.length - 1) {
    perlinLines[i].drawLineFinal();
    // }
    // else if (perlinLines[i].eraseFlag == true) {
    // 	perlinLines[i].drawNoisePoints();
    // perlinLines[i].joinPoints(perlinLines[i].pVecArr.reverse());
    // }
    // }
  }
  // for (let ele of perlinLines) {
  // console.log(ele.iter);}

  for (point of perlinLines[i].pVecArr) {
    point.x += 0.2;
  }
  // TBI: reverse animation ------------------------------------------------------------------------------------------------------------------------------------ ||
  //  ||||||||||||||||||||||||||||||||||||
  //  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

  // for (let i = 0; i < numberOfLines; i++) {

  // 	if (frameCount - time > 20) {
  // 		perlinLines[i].polarityReverser();
  // 		if (perlinLines[i].reverseFlag && perlinLines[i].iter != 0) {
  // 			perlinLines[i].drawLineFinalReverse();
  // 		}
  // 		else if (perlinLines[i].eraseFlag == true) {
  // 			perlinLines[i].drawNoisePoints();
  // 			// perlinLines[i].joinPoints(perlinLines[i].pVecArr.reverse());
  // 		}
  // 	}

  // }

  //	// console.log(millis());
}
