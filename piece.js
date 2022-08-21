'use strict';

class Piece {
	constructor(ctx) {
		this.ctx = ctx;
		this.spawn();
	}

	// параметр noOfTypes - количество вариантов
	randomizeTetraminoType(noOfTypes) {
		return Math.floor(Math.random() * noOfTypes);
	}

	spawn() {
		this.typeId = this.randomizeTetraminoType(COLORS.length - 1);
		this.shape = SHAPES[this.typeId];
		this.color = COLORS[this.typeId];
		this.x = 0;
		this.y = 0;
	}

	// расположить фигурку в центре поля
	setStartPosition() {
		this.x = this.typeId === 3 ? 4 : 3;
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
		this.shape = p.shape;
	}
}
