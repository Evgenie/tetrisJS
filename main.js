const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

//устанавливаем размер холста
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//устанавливаем масштаб

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new board();

function play(){
  board.reset();
  //наглядное представление матрицы игрового поля
  console.table(board.grid);
}

function play() {
  board.reset();
  let piece = new Piece(ctx);
  piece.draw();

  board.piece = piece;
}

const moves = {
  [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: p => ({ ...p, y: p.y + 1})
};

document.addEventListener("keydown", event => {
  if (moves[event.keyCode]) {
    //отмена действий по умолчанию
    event.preventDefault();

    //получение новых координат фигурки
    let p = moves[event.keyCode](board.piece);
    
    //проверка нового положения
    if (board.valid(p)) {
      //реальное перемещение фигурки, если новое положение допустимо
      board.piece.move(p);

      //стирание старого отображения фигуры на холсте
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      
      board.piece.draw();
    }
  }
});