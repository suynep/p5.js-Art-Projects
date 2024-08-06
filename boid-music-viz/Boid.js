class Boid {
  // separation: steer to avoid crowding local flockmates.
  // alignment: steer towards the average heading of local flockmates.
  // cohesion: steer to move towards the average position (center of mass) of local flockmates.

  constructor(x, y, col) {
    this.x = x;
    this.y = y;

    // following's just for shape
    this.length = 10;
    this.height = 6;

    this.visAngleRange = 270; // in Degrees
    this.separationRate = 10;

    this.alignmentRate = 5; // in Degrees
    this.visRange = 100; // in px

    this.inRange = [];
    this.col = col;

    this.apexDir = random(0, 360);
    this.apexVec = new p5.Vector(
      this.visRange * cos(this.apexDir),
      this.visRange * sin(this.apexDir)
    );
    this.speed = 2;
  }

  drawBoid() {
    push();
    translate(this.x, this.y);
    fill(this.col);
    rotate(this.apexDir);
    beginShape();
    vertex(-this.length / 2, -this.height / 2);
    vertex(-this.length / 2, this.height / 2);
    vertex(this.length / 2, 0);
    endShape();
    pop();
  }

  moveBoid(w, h) {
    this.x += p5.Vector.normalize(this.apexVec).x * this.speed;
    this.y += p5.Vector.normalize(this.apexVec).y * this.speed;
    if (this.x > w) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = w;
    }

    if (this.y > h) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = h;
    }
  }

  distCalc(other) {
    let x = Math.pow(other.x - this.x, 2);
    let y = Math.pow(other.y - this.y, 2);

    return Math.sqrt(x + y);
  }

  updateVision(arrOfBoids) {
    // need to pass the array containing all the boids?
    this.inRange = [];
    for (let i = 0; i < arrOfBoids.length; i++) {
      if (this.distCalc(arrOfBoids[i]) < this.visRange) {
        this.inRange.push(arrOfBoids[i]);
      } else {
        this.inRange = this.inRange.filter((boid) => {
          return boid != arrOfBoids[i];
        });
      }
    }
  }

  steerAway() {
    let dummy = createVector(0, 0);
    if (this.inRange.length != 0) {
      for (let neighbor of this.inRange) {
        if (this in neighbor.inRange) {
          let vec = p5.Vector(this.x - neighbor.x, this.y - neighbor.y);

          dummy = p5.Vector.add(dummy, vec);
        }
      }
      this.apexVec = p5.Vector.lerp(
        this.apexVec,
        dummy,
        this.separationRate / 100
      );
    }
  }

  moveTowards() {
    let xSum,
      ySum = [0, 0];
    for (let neighbor of this.inRange) {
      xSum += neighbor.x;
      ySum += neighbor.y;
    }
    let xAvg,
      yAvg = [xSum / this.inRange.length, ySum / this.inRange.length];
    let dummy = new p5.Vector(xAvg - this.x, yAvg - this.y);
    this.apexDir = p5.Vector.lerp(

    this.apexVec = p5.Vector.lerp(
      this.apexVec,
      dummy,
      this.alignmentRate /10 
    );
    console.log(this.apexVec);
  }
}
