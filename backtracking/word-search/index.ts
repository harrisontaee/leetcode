const exist = (board: string[][], word: string): boolean => {
	let result = false;
	let rows = board.length;
	let cols = board[0].length;


	const backtrack = (row: number, col: number, charAt: number = 0) => {
		 if (charAt === word.length) {
			result = true;
			return;
		 };

		 if (row >= rows || col >= cols || row < 0 || col < 0 || board[row][col] !== word.charAt(charAt)) return;

		 const cell = board[row][col];
		 board[row][col] = null;
		 charAt++;

		 backtrack(row + 1, col, charAt);
		 backtrack(row - 1, col, charAt);
		 backtrack(row, col + 1, charAt);
		 backtrack(row, col - 1, charAt);

		 board[row][col] = cell;
	};


	for (let row = 0; row < rows; row++) {
		 for (let col = 0; col < cols; col++) {
			  backtrack(row, col);
		 };
	};

	return result;
};