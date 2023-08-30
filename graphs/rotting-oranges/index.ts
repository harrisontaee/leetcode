/**
 * @link https://leetcode.com/problems/rotting-oranges/
 */
const orangesRotting = (grid: number[][]): number => {
	const rotting = new Set<number>();
	const rows = grid.length;
	const cols = grid[0].length;
	let fruit = 0;

	for (let row = 0; row < rows; row++) {
		 for (let col = 0; col < cols; col++) {
			  if (!grid[row][col]) continue;
			  if (grid[row][col] == 2) rotting.add((row * cols) + col);
			  fruit++;
		 };
	};

	if (rotting.size == 0) return !!fruit ? -1 : 0;
	let rotten = rotting.size;
	let prev = -1;
	let time = -1;


	while (rotten > prev) {
		 prev = rotten;
		 for (let index of Array.from(rotting)) {
			  const row = Math.floor(index / cols);
			  const col = index - (row * cols);
			  rotting.delete(index);

			  if (row > 0 && grid[row - 1][col] == 1) {
					rotting.add(index - cols);
					grid[row - 1][col] = 2;
					rotten++;
			  };

			  if (row < rows - 1 && grid[row + 1][col] == 1) {
					rotting.add(index + cols);
					grid[row + 1][col] = 2;
					rotten++;
			  };

			  if (col > 0 && grid[row][col - 1] == 1) {
					rotting.add(index - 1);
					grid[row][col - 1] = 2;
					rotten++;
			  };

			  if (col < cols - 1 && grid[row][col + 1] == 1) {
					rotting.add(index + 1);
					grid[row][col + 1] = 2;
					rotten++;
			  };
		 };
		 time++;
	};

	return rotten == fruit ? time : -1;
};