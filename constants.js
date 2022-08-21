'use strict';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 45;
const KEY = {
	UP: 'w',
	SPACE: ' ',
	LEFT: 'a',
	RIGHT: 'd',
	DOWN: 's',
};

Object.freeze(KEY);

const COLORS = ['cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'];

const SHAPES = [
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[2, 0, 0],
		[2, 2, 2],
		[0, 0, 0],
	],
	[
		[0, 0, 3],
		[3, 3, 3],
		[0, 0, 0],
	],
	[
		[4, 4],
		[4, 4],
	],
	[
		[0, 5, 5],
		[5, 5, 0],
		[0, 0, 0],
	],
	[
		[0, 6, 0],
		[6, 6, 6],
		[0, 0, 0],
	],
	[
		[7, 7, 0],
		[0, 7, 7],
		[0, 0, 0],
	],
];

const POINTS = {
	SINGLE: 100,
	DOUBLE: 300,
	TRIPLE: 500,
	TETRIS: 800,
	SOFT_DROP: 1,
	HARD_DROP: 2,
};

Object.freeze(POINTS);

const LINES_PER_LEVEL = 10;

const LEVEL = {
	0: 800,
	1: 720,
	2: 630,
	3: 550,
	4: 470,
	5: 390,
	6: 310,
	7: 230,
	8: 150,
	9: 70,
	10: 0,
};

Object.freeze(LEVEL);
