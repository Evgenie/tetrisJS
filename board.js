class Board {
  constructor() {
    this.piece = null;
  }

  //сбрасывает поле перед началом игры
  reset(){
    this.grid = this.getEmptyBoard();
  }

  //создает матрицу нужного размераЁ заполненную нулями
  getEmptyBoard(){
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }
}
