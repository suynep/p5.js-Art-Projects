
let pixSize = 10;

const genTree = (x, y) => {
    const TREEGREEN=color(50, 168, 82);
    push ();
    fill (TREEGREEN);
    rect (x, y, pixSize);
    pop ();
}

const genWater = (x, y) => {
    const WATERBLUE =color(92, 185, 242);
    push ();
    fill (WATERBLUE);
    rect (x, y, pixSize);
    pop ();
}

const genSand = (x, y) => {
    const SANDYELLOW =color(240, 250, 130);
    push ();
    fill (SANDYELLOW);
    rect (x, y, pixSize);
    pop ();
}