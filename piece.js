class Piece {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = 'blue';
    this.shape = [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0]
    ];

    //начальная позиция
    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        //this.x, this.y - левый верхний угол фигурки на игровом поле.
        //х, у - координаты ячейки относительно матрицы фигурки (3*3).
        //this.x + x - координаты ячейки на игровом поле.
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }
  move(p) {
    this.x = p.x;
    this.y = p.y;
  }
}

