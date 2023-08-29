/**
 * @link https://leetcode.com/problems/max-area-of-island/
 */
const maxAreaOfIsland = (grid: number[][]): number => {
	const rows = grid.length;
	const cols = grid[0].length;
	let max = 0;


	const dfs = (row: number = 0, col: number = 0): number => {
		if (row < 0 || col < 0 || row == rows || col == cols || !grid[row][col]) return 0;
		grid[row][col] = 0;
		return dfs(row - 1, col) + dfs(row + 1, col) + dfs(row, col - 1) + dfs(row, col + 1) + 1;
	};


	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (!grid[row][col]) continue;
			const area = dfs(row, col);
			max = Math.max(max, area);
		};
	};

	return max;
};
