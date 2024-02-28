class Grid {
    constructor(size, cellSize) {
        this.size = size;
        this.cellSize = cellSize;
        this.cellNum = Math.floor(this.size/this.cellSize);
        this.cellArray = [];

    }

    createGrid() {
        noFill();
        stroke(0);
        for (let i = 0; i < this.cellNum; i++) {
            for (let j = 0; j < this.cellNum; j++) {
                rect (i * this.cellSize, j * this.cellSize, this.cellSize);
                this.cellArray.push([i, j]);
            }
        }
    }
}