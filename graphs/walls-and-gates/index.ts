/**
 * @link https://leetcode.com/problems/walls-and-gates/
 */
const wallsAndGates = (rooms: number[][]): void => {
	const rows = rooms.length;
	const cols = rooms[0].length;
	const Deltas = [[-1, 0], [1, 0], [0, 1], [0, -1]];
	
	
	const dfs = (row: number, col: number, dist: number = 0) => {
		 rooms[row][col] = dist;

		 for (let [DR, DC] of Deltas) {
			  const newRow = row + DR;
			  if (newRow < 0 || newRow == rows) continue;
			  const newCol = col + DC;
			  if (newCol < 0 || newCol == cols) continue;

			  if (rooms[newRow][newCol] <= dist + 1) continue;
			  dfs(newRow, newCol, dist + 1);
		 };
	};


	for (let row = 0; row < rows; row++) {
		 for (let col = 0; col < cols; col++) {
			  if (rooms[row][col]) continue;
			  dfs(row, col);
		 };
	};
};