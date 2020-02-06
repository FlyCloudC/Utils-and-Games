let output, menu, formSize, stage;
let canvasBack, cxtBack, canvasTop, cxtTop, timer;
let map, dropSet;
let mapSize, sideLen, blockSideLen, dropSize;
let dropCount, score, combo;
const vInit = 8, deltaTime = 20;
const vx = [1, 0, -1, 0], vy = [0, 1, 0, -1];

class Drop {
  constructor(x, y, direction) {
    this.direction = direction;
    this.vx = vx[direction] * vInit;
    this.vy = vy[direction] * vInit;
    this.x = blockSideLen * (x + 0.5 * (1 + vx[direction]));
    this.y = blockSideLen * (y + 0.5 * (1 + vy[direction]));
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    return true;
  }
}

window.onload = () => {
  [output, menu, formSize, stage, canvasBack, canvasTop] =
    ['show', 'menu', 'form-size', 'stage', 'back-layer', 'top-layer']
      .map(x => document.getElementById(x));
  cxtBack = canvasBack.getContext('2d');
  cxtTop = canvasTop.getContext('2d');
  canvasTop.onclick = touch;
}

function posToMap(pos) { return pos.map(x => Math.floor(x / blockSideLen)); }

function touch({ offsetX, offsetY }) {
  if (dropSet.size) return;
  --dropCount;
  let [x, y] = posToMap([offsetX, offsetY]);
  if (addDrop(x, y)) combo = 0;
}

function addDrop(x, y) {
  ++map[x][y];
  if (map[x][y] < 5) {
    drawBackDrop(x, y);
    return false;
  }
  map[x][y] = 0;
  for (let i = 0; i < 4; ++i) dropSet.add(new Drop(x, y, i));
  drawBackDrop(x, y);
  return true;
}

function drawBackDrop(i, j) {
  cxtBack.fillRect(...[i, j].map(x => x * blockSideLen), blockSideLen, blockSideLen);
  if (map[i][j] > 0) {
    let [x, y] = [i, j].map(x => (x + 0.5) * blockSideLen);
    let r = (map[i][j] + 1) * 0.3 * dropSize;
    cxtBack.beginPath();
    cxtBack.moveTo(x + r, y);
    cxtBack.arc(x, y, r, 0, 6.284);
    cxtBack.stroke();
  }
}

function start() {
  menu.style.display = 'none';
  output.style.display = 'block';
  stage.style.display = 'block';

  mapSize = formSize.value > 0 ? formSize.value : 9;
  blockSideLen = Math.floor(Math.min(screen.availWidth, 500) / mapSize);
  dropSize = blockSideLen * 0.3;
  sideLen = mapSize * blockSideLen + 2;
  canvasBack.width = canvasBack.height = sideLen;
  canvasTop.width = canvasTop.height = sideLen;
  stage.style.height = `${sideLen}px`;

  dropCount = 10, score = 0;
  dropSet = new Set();
  map = new Array();

  cxtBack.fillStyle = '#023ccc';
  cxtBack.strokeStyle = '#00ccff';
  cxtBack.fillRect(0, 0, sideLen, sideLen);
  for (let i = 0; i < mapSize; ++i) {
    map[i] = new Array();
    for (let j = 0; j < mapSize; ++j) {
      let r = Math.floor(Math.random() * 13) - 8;
      map[i][j] = r > 0 ? r : 0;
      if (r > 0) drawBackDrop(i, j);
    }
  }

  timer = setInterval(updata, deltaTime);
}

function end() {
  clearInterval(timer);
  output.style.display = 'none';
  stage.style.display = 'none';
  menu.style.display = 'block';
  alert(`最终得分${score}`);
}

function updata() {
  canvasTop.width = sideLen;

  for (let drop of dropSet) {
    drop.move();
    let [x, y] = posToMap([drop.x, drop.y]);
    //delete
    if (x < 0 || y < 0 || x >= mapSize || y >= mapSize) {
      dropSet.delete(drop);
      continue;
    }
    if (map[x][y]) {
      dropSet.delete(drop);
      if (addDrop(x, y)) {
        if (combo)++dropCount;
        score += 10 * ++combo;
      }
      continue;
    }
    //draw
    let dir = drop.direction;
    cxtTop.strokeStyle = '#00ccff';
    cxtTop.beginPath();
    cxtTop.moveTo(
      drop.x + dropSize * vx[dir],
      drop.y + dropSize * vy[dir]
    );
    cxtTop.quadraticCurveTo(
      drop.x + dropSize * (vx[dir] + vx[(dir + 1) % 4]),
      drop.y + dropSize * (vy[dir] + vy[(dir + 1) % 4]),
      drop.x - dropSize * vx[dir],
      drop.y - dropSize * vy[dir]
    );
    cxtTop.quadraticCurveTo(
      drop.x + dropSize * (vx[dir] + vx[(dir + 3) % 4]),
      drop.y + dropSize * (vy[dir] + vy[(dir + 3) % 4]),
      drop.x + dropSize * vx[dir],
      drop.y + dropSize * vy[dir]
    );
    cxtTop.stroke();
  }

  output.innerHTML = `分数：${score}<br />水滴数：${dropCount}`;

  if (dropCount <= 0 && dropSet.size <= 0) end();
}