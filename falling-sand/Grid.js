class Grid {
    constructor(width, height, cellSize) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cellNumX = this.width / cellSize;
        this.cellNumY = this.height / cellSize;
        this.arr = [];
        this.drawnArr = [];
        this.positionX;
        this.positionY;
    }

    createGrid() {
        push();
        noFill();
        stroke(255);
        for (let j = 0; j < this.cellNumY; j++) {
            for (let i = 0; i < this.cellNumX; i++) {
                rect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
                this.arr.push([i * this.cellSize, j * this.cellSize]);
            }
        }
        pop();
    }

    // let's try creating a pixel art drawing shit lmao
    updateGrid (x, y) {
        this.createGrid();
        [this.positionX, this.positionY] = this.arr[Math.floor(y) * this.cellNumX + Math.floor(x)];
        // console.log(Math.floor(y * this.cellNumX + x));
        console.log(Math.floor(y) * this.cellNumX + Math.floor(x))
        push ();
        fill (255);
        rect(this.positionX, this.positionY, this.cellSize);
        pop ();
    }

    saveState() {
        if (!this.drawnArr.includes([this.positionX, this.positionY])) {
            this.drawnArr.push([this.positionX, this.positionY]);
        }
    }

    drawState() {
        for (let i = 0; i < this.drawnArr.length; i++) {
            rect(this.drawnArr[i][0], this.drawnArr[i][1], this.cellSize);
        }
    }

}