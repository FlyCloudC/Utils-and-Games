let output, canvas, cxt, timer;
let size, sideLen, blockSideLen, dropSize;
let vx = [1, 0, -1, 0], vy = [0, 1, 0, -1];
let vInit = 4, dt = 15;
let map, drops;
let dropCount, score, combo;

class Drop {
  constructor(x, y, direction) {
    this.direction = direction;
    this.vx = vx[direction] * vInit;
    this.vy = vy[direction] * vInit;
    this.x = blockSideLen * (x + 0.5 * (1 + vx[direction]));
    this.y = blockSideLen * (x + 0.5 * (1 + vy[direction]));
  }
}

function posToMap({ x, y }) {
  return { x: Math.floor(x / blockSideLen), y: Math.floor(y / blockSideLen) };
}

window.onload = () => {
  output = document.getElementById('show');
  canvas = document.getElementById('canvas');
  cxt = canvas.getContent;
  start();
}

function start(size) {

}