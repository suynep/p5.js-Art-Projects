const COLORS = [50, 255]
let points //
let duplPoints // this will essentially be a duplicate of the `initial` array of line points --> helps with the --showOriginalSegment()-- function

let iter = 5

function genPointsInit () {
  // generate initial points and store em into `points` array

  let points = []

  let offset = 10
  let step = 40
  let multiplier = 60

  for (let i = offset; i <= width; i += step) {
    points.push(createVector(i, height / 2 + random(-2, 2) * multiplier))
  }

  return points
}

function setup () {
  createCanvas(800, 400)
  points = genPointsInit()
  duplPoints = points

  // saveGif('chaikinSketch', 2);
}

function showOriginalSegment () {
  push()
  stroke(255, 100)
  beginShape()
  for (let ele of duplPoints) {
    vertex(ele.x, ele.y)
    push()
    strokeWeight(3)
    stroke(255, 0, 0)
    point(ele.x, ele.y)
    pop()
  }
  endShape()
  pop()
}

function draw () {
  background(COLORS[0])
  noFill()
  stroke(COLORS[1])

  // for drawing the points of the `points` array

  beginShape()
  for (let ele of points) {
    vertex(ele.x, ele.y)
  }
  endShape()

  if (iter > 0) {
    nextPoints = []

    // nextPoints.push(createVector(points[i].x, points[i].y)); ////
    for (let i = 0; i < points.length - 1; i += 1) {
      ;[qx, qy, px, py] = chaikinCalc(
        points[i].x,
        points[i].y,
        points[i + 1].x,
        points[i + 1].y
      )

      nextPoints.push(createVector(qx, qy)) ////
      nextPoints.push(createVector(px, py)) ////

      // [qx, qy, px, py] = chaikinCalc(points[i + 1].x, points[i + 1].y, points[i + 2].x, points[i + 2].y);

      // nextPoints.push(createVector(qx, qy)); ////

      // nextPoints.push(createVector(px, py));
    }
  }
  nextPoints.unshift(duplPoints[0]) // essentially adding the first point forcibly
  nextPoints.push(duplPoints[duplPoints.length - 1]) // adding the last point forcibly
  points = nextPoints

  iter -= 1
  showOriginalSegment() // show the original lines
}

function chaikinCalc (x1, y1, x2, y2) {
  //  SECTION FORMULA! (1:3 internal division for point `q`)
  // 					 (3:1 internal division for point `p`)

  let qx = (1 * x2 + 3 * x1) / 4
  let qy = (1 * y2 + 3 * y1) / 4
  let px = (3 * x2 + 1 * x1) / 4
  let py = (3 * y2 + 1 * y1) / 4

  return [qx, qy, px, py]
}
