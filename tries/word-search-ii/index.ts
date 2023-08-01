class TNode {
	children: Map<string, TNode>;
	word: string;
	constructor() {
		this.children = new Map();
		this.word = null;
	};
};





/**
 * @link https://leetcode.com/problems/word-search-ii/
 */
const findWords = (board: string[][], words: string[]): string[] => {
	const result: string[] = [];
	const rows = board.length;
	const cols = board[0].length;
	const trie = new TNode();



	for (let word of words) {
		let cur = trie;
		for (let char of word) {
			if (!cur.children.has(char)) cur.children.set(char, new TNode());
			cur = cur.children.get(char);
		};
		cur.word = word;
	};



	const dfs = (row: number, col: number, node: TNode) => {
		let char = board[row][col];
		let cur = node.children.get(char);
		if (!cur) return;
		if (cur.word) {
			result.push(cur.word);
			cur.word = null;
		};

		board[row][col] = "";
		if (row + 1 < rows) dfs(row + 1, col, cur);
		if (row - 1 >= 0) dfs(row - 1, col, cur);
		if (col + 1 < cols) dfs(row, col + 1, cur);
		if (col - 1 >= 0) dfs(row, col - 1, cur);
		board[row][col] = char;

		if (cur.children.size === 0) node.children.delete(char);
	};



	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			dfs(row, col, trie);
		};
	};

	return result;
};
