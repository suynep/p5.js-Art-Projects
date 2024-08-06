let boids = [];


function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);

	for (let i = 0; i < 10; i++) {
		let boid = new Boid(random(0, width), random(0, height), 255);
		boids.push(boid);
	}
}

function draw() {
	background(10);
	for (let boid of boids) {
		boid.drawBoid();
		boid.moveBoid(width, height);
		boid.updateVision(boids)
		boid.steerAway();
		boid.moveTowards();
	}
}


