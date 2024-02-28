
class Bullet {
    constructor(x, y, hasHit=false) {
        this.x = x;
        this.y = y;
        this.hasHit = hasHit;
        this.size = 4;
    }

    drawBullet() {
        circle (this.x, this.y, this.size);
    }

}