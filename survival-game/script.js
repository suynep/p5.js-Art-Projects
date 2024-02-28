let player;
let enemies = [];

function setup() {
	createCanvas(800, 800);
	player = new Player(width / 2, height / 2);
	// console.log(enemies);
}

function draw() {
	background(50);
	player.drawPlayer();
	for (let i = 0; i < 50; i++) {
		enemies.push(new Enemy(player.x, player.y));
	}
	for (let i = 0; i < 50; i++) {
		enemies[i].drawEnemy();
		enemies[i].moveEnemy(player.x, player.y);
	}
	checkPress();
}

function checkPress() {
	if (keyIsDown(87)) {
		player.updatePlayer(1, true);
	}
	else if (keyIsDown(83)) {
		player.updatePlayer(1);
	}
	if (keyIsDown(65)) {
		player.updatePlayer(0, true);
	}
	else if (keyIsDown(68)) {
		player.updatePlayer(0);
	}
}
