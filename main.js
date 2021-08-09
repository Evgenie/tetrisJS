"use strict";

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');


//устанавливаем размер холста
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
ctxNext.canvas.width = 4 * BLOCK_SIZE;
ctxNext.canvas.height = 4 * BLOCK_SIZE;


//устанавливаем масштаб
ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board(ctx, ctxNext);

const time = {
  start: 0,
  elapsed: 0,
  level: 1000
};

let requestId;

function gameOver() {
  cancelAnimationFrame(requestId);
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(1, 3, 8, 1.2);
  this.ctx.font = '1px Arial';
  this.ctx.fillStyle = 'red';
  this.ctx.fillText('GAME OVER', 1.8, 4);
}

function animate(now = 0) {
  // обновить истекшее время
  time.elapsed = now - time.start;
  // если время отображения текущего фрейма прошло 
  if (time.elapsed > time.level) {
    // начать отсчет сначала
    time.start = now;
    // "уронить" активную фигурку
    if (!board.drop()) {
      gameOver()
      return;
    }
  }

  // очистить холст для отрисовки нового фрейма
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // отрисовать игровое поле 
  board.draw();
  requestId = requestAnimationFrame(animate);

}

function resetGame() {
  account.score = 0;
  account.lines = 0;
  account.level = 0;
  board.reset();
  let piece = new Piece(ctx);
  board.piece = piece;
  board.piece.setStartPosition();
}

function play() {
  resetGame();

  animate();

  //наглядное представление матрицы игрового поля
  // console.table(board.grid);
}

const moves = {
  [KEY.UP]: (p) => board.rotate(p),
  [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
  [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: p => ({ ...p, y: p.y + 1 })
};

document.addEventListener("keydown", event => {
  if (moves[event.keyCode]) {
    //отмена действий по умолчанию
    event.preventDefault();

    //получение новых координат фигурки
    let p = moves[event.keyCode](board.piece);

    if (event.keyCode === KEY.SPACE) {
      while (board.valid(p)) {
        account.score += POINTS.HARD_DROP;
        board.piece.move(p);

        //стирание старого отображения фигуры
        /* ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        board.piece.draw(); */

        p = moves[KEY.DOWN](board.piece);
      }
    } else if (board.valid(p)) {
      //реальное перемещение фигурки, если новое положение допустимо
      board.piece.move(p);
      if (event.keyCode === KEY.DOWN) {
        account.score += POINTS.SOFT_DROP;
      }
      //стирание старого отображения фигуры на холсте
      /* ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      board.piece.draw(); */
    }
  }
});

let accountValues = {
  score: 0,
  lines: 0,
  level: 0
}

function updateAccount(key, value) {
  let element = document.getElementById('key');
  if (element) {
    element.textContent = value;
  }
}

let account = new Proxy(accountValues, {
  set: (target, key, value) => {
    target[key] = value;
    updateAccount(key, value);
    return true;
  }
});

