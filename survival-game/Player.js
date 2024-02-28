
// let [width, height] = [800, 800];





class Player {
    constructor(x, y, isAlive = true) {
        this.x = x;
        this.y = y;
        this.isAlive = isAlive;
        this.size = 50;
        this.vel = 5;
        this.bullets = [];
    }

    drawPlayer() {
        rect((this.x - this.size / 2), (this.y - this.size / 2), this.size);
    }

    updatePlayer(dir = 0, neg = false) { // dir = 0 for x mvmt, dir = 1 for y mvmt
        // neg var is for pos/negative direction of mvmt [pos y = down, pos x = right]
        if (dir == 0) {
            if (neg) {
                if (this.x >= 0) {
                    this.x -= this.vel;
                } else {
                    this.x = width + this.x;
                }
            } else {
                if (this.x < width) {
                    this.x += this.vel;
                } else {
                    this.x = this.x % width;
                }
            }
        }
        else {
            if (neg) {
                if (this.y >= 0) {
                    this.y -= this.vel;
                } else {
                    this.y = height + this.y;
                }
            } else {
                if (this.y < height) {
                    this.y += this.vel;
                } else {
                    this.y = this.y % height;
                }
            }
        }
    }

    createBullets(num) {
        for (let i = 0; i < num; i++) {
            this.bullets.push(new Bullet(this.x, this.y));
        }
    }

    shootBullets() { // shoot bullet towards the nearest enemy

    }

}