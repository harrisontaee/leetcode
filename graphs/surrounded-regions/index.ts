/**
 * @link https://leetcode.com/problems/surrounded-regions/
 */
const solve = (board: string[][]): void => {
	const rows = board.length;
	const cols = board[0].length;


	const dfs = (row: number, col: number) => {
		 if (row < 0 || col < 0 || row == rows || col == cols || board[row][col] !== "O") return;
		 board[row][col] = "B";

		 dfs(row + 1, col);
		 dfs(row - 1, col);
		 dfs(row, col + 1);
		 dfs(row, col - 1);
	};


	for (let row = 0; row < rows; row++) {
		 dfs(row, 0);
		 dfs(row, cols - 1);
	};

	for (let col = 0; col < cols; col++) {
		 dfs(0, col);
		 dfs(rows - 1, col);
	};

	for (let row = 0; row < rows; row++) {
		 for (let col = 0; col < cols; col++) {
			  const cell = board[row][col];
			  if (cell === "X") continue;
			  if (cell === "O") board[row][col] = "X";
			  if (cell === "B") board[row][col] = "O";
		 };
	};
};