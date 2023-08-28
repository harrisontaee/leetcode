/**
 * @link https://leetcode.com/problems/number-of-islands/
 */
const numIslands = (grid: string[][]): number => {
	const rows = grid.length;
	const cols = grid[0].length;
	let islands = 0;


	const flood = (row: number, col: number) => {
		 if (row < 0 || col < 0 || row > rows - 1 || col > cols - 1 || grid[row][col] === "0") return;

		 grid[row][col] = "0"
		 flood(row, col - 1);
		 flood(row, col + 1);
		 flood(row - 1, col);
		 flood(row + 1, col);
	};


	for (let row = 0; row < rows; row++) {
		 for (let col = 0; col < cols; col++) {
			  if (grid[row][col] === "0") continue;
			  islands++;
			  flood(row, col);
		 }
	};

	return islands;
};