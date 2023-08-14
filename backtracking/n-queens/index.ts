/**
 * @link https://leetcode.com/problems/n-queens/
 */
const solveNQueens = (n: number): string[][] => {
	const result: string[][] = [];
	const board: string[][] = new Array(n);
	for (let i = 0; i < n; i++) board[i] = new Array(n).fill(".");


	const backtrack = (row: number = 0) => {
		if (row === n) {
			const solution: string[] = [];
			for (let i = 0; i < board.length; i++)
				solution.push(board[i].join(""));
			result.push(solution);
			return;
		};

		outer:
		for (let col = 0; col < board.length; col++) {
			for (let i = row; i >= 0; i--) if (board[i][col] === "Q") continue outer;
			for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j] === "Q") continue outer;
			for (let i = row, j = col; i >= 0 && j < n; i--, j++) if (board[i][j] === "Q") continue outer;

			board[row][col] = "Q";
			backtrack(row + 1);
			board[row][col] = ".";
		};
	};


	backtrack();
	return result;
};
