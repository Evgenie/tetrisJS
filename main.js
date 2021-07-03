const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

//устанавливаем размер холста
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//устанавливаем масштаб

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

