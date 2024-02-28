
// create two arrays (x, y) of random circular coord
let [width, height] = [800, 800];

let arr = [];
let rad = 300;
for (let i = -Math.floor(width / 2); i < Math.floor(width / 2); i++) {
    for (let j = -Math.floor(height / 2); j < Math.floor(height / 2); j++) {

        if (Math.abs(Math.pow(i, 2) + Math.pow(j, 2) - Math.pow(rad, 2)) < 100) {
            arr.push([i, j]);
        }
    }

}
console.log(arr);


class Enemy {
    constructor(cx, cy, health = 40) {
        this.chosen = random(arr);
        this.x = this.chosen[0];
        this.y = this.chosen[1];
        this.size = 10;
        this.health = health;
        this.vel = 2;
        this.cx = cx;
        this.cy = cy;
    }

    drawEnemy() {
        push();
        translate(this.cx, this.cy);
        circle(this.x, this.y, 10)
        pop();
    }

    moveEnemy(x, y) {
        if (this.x < 0) {
            this.x += this.vel;
        } else if (this.x > 0) {
            this.x -= this.vel;
        }

        if (this.y < 0) {
            this.y += this.vel;
        } else if (this.y  > 0) {
            this.y -= this.vel;
        }

    }
}