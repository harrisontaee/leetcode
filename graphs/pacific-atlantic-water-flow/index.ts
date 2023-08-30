/**
 * @link https://leetcode.com/problems/pacific-atlantic-water-flow/
 */
const pacificAtlantic = (heights: number[][]): number[][] => {
	const rows = heights.length;
	const cols = heights[0].length;
	const result: number[][] = [];
	const pacific: boolean[][] = Array.from({length: rows}, () => new Array(cols).fill(false));
	const atlantic: boolean[][] = Array.from({length: rows}, () => new Array(cols).fill(false));
	const directions: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];


	const dfs = (row: number, col: number, ocean: boolean[][]) => {
		ocean[row][col] = true;
		for (const [dr, dc] of directions) {
			const newRow = row + dr;
			if (newRow < 0 || newRow == rows) continue;
			const newCol = col + dc;
			if (newCol < 0 || newCol == cols) continue;
			if (ocean[newRow][newCol] || heights[newRow][newCol] < heights[row][col]) continue;
			dfs(newRow, newCol, ocean);
		};
	};


	for (let row = 0; row < rows; row++) {
		dfs(row, 0, pacific);
		dfs(row, cols - 1, atlantic);
	};

	for (let col = 0; col < cols; col++) {
		dfs(0, col, pacific);
		dfs(rows - 1, col, atlantic);
	};

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (pacific[row][col] && atlantic[row][col]) result.push([row, col]);
		};
	};

	return result;
};
