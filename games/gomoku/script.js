let startBtn, undoBtn;
let canvas, cxt;
let boardSize, sideLen, blockSideLen, halfSideLen, pieceRadiu;
let board, color, lastPut;

window.onload = () => {
  [startBtn, undoBtn, canvas] =
    ['start-btn', 'undo-btn', 'checkerboard']
      .map(x => document.getElementById(x));

  startBtn.onclick = start;
  undoBtn.onclick = undo;
  canvas.onclick = touch;
  cxt = canvas.getContext('2d');

  boardSize = 15;
  start();
}

function touch({ offsetX, offsetY }) {
  let [x, y] = [offsetX, offsetY].map(x => Math.floor(x / blockSideLen));
  if (!inBoard(x, y) || board[x][y]) return;
  putPiece(x, y);
}

function undo() {
  if (!lastPut.length) return;
  removePiece(...lastPut.splice(-1, 1)[0]);
  color = 3 - color;
}

function putPiece(x, y) {
  board[x][y] = color;
  if (checkWin(x, y)) alert(`${color == 1 ? '黑' : '白'}方胜利`);
  lastPut.push([x, y]);

  [x, y] = [x, y].map(x => (2 * x + 1) * halfSideLen);
  cxt.clearRect(x - pieceRadiu, y - pieceRadiu, 2 * pieceRadiu, 2 * pieceRadiu);
  cxt.beginPath();
  cxt.moveTo(x + pieceRadiu, y);
  cxt.arc(x, y, pieceRadiu, 0, 6.284);
  if (color == 1) cxt.fill();
  cxt.stroke();

  color = 3 - color;
}
function removePiece(x, y) {
  board[x][y] = 0;
  let dir = [!x, !y, x + 1 == boardSize, y + 1 == boardSize];

  [x, y] = [x, y].map(x => (2 * x + 1) * halfSideLen);
  cxt.clearRect(x - halfSideLen, y - halfSideLen, 2 * halfSideLen, 2 * halfSideLen);
  cxt.beginPath();
  cxt.moveTo(dir[0] ? x : x - halfSideLen, y);
  cxt.lineTo(dir[2] ? x : x + halfSideLen, y);
  cxt.moveTo(x, dir[1] ? y : y - halfSideLen);
  cxt.lineTo(x, dir[3] ? y : y + halfSideLen);
  cxt.stroke();
}

function inBoard(x, y) {
  return x >= 0 && y >= 0 && x < boardSize && y < boardSize;
}

function countPiece(x, y, dx, dy) {
  return (!inBoard(x, y) || board[x][y] != color) ? 0 :
    1 + countPiece(x + dx, y + dy, dx, dy);
}

function checkWin(x, y) {
  for (let [dx, dy] in [[0, 1], [1, 0], [1, -1], [-1, 1]])
    if (countPiece(x, t, dx, dy) + countPiece(x, y, -dx, -dy) > 5)
      return true;
}

function start() {
  blockSideLen = Math.floor(Math.min(screen.availWidth, 500) * 0.5 / boardSize) * 2;
  halfSideLen = blockSideLen * 0.5;
  pieceRadiu = halfSideLen * 0.8;
  sideLen = boardSize * blockSideLen;
  canvas.width = canvas.height = sideLen;
  color = 1;

  board = new Array();
  for (let i = 0; i < boardSize; ++i)
    board[i] = new Array(boardSize);
  lastPut = new Array();

  for (let i = j = halfSideLen; i < sideLen; i += blockSideLen) {
    cxt.moveTo(i, j), cxt.lineTo(i, sideLen - j);
    cxt.moveTo(j, i), cxt.lineTo(sideLen - j, i);
  }
  cxt.stroke();
}