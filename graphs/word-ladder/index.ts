/**
 * @link https://leetcode.com/problems/word-ladder/
 */
const ladderLength = (beginWord: string, endWord: string, wordList: string[]): number => {
	if (!wordList.includes(endWord)) return 0;

	const patterns: {[pattern: string]: string[]} = {};
	wordList.push(beginWord);

	for (let word of wordList) {
		 for (let i = 0; i < word.length; i++) {
			  const pattern = word.slice(0, i) + '*' + word.slice(i + 1);
			  if (!(pattern in patterns)) patterns[pattern] = [];
			  patterns[pattern].push(word);
		 }
	}

	let count = 1;
	const queue = [beginWord];
	const visited = new Set([beginWord]);
	while (queue.length) {
		 const size = queue.length;
		 for (let i = 0; i < size; i++) {
			  const word = queue.shift();
			  if (word === endWord) return count;

			  for (let j = 0; j < word.length; j++) {
					const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
					for (let neighbour of patterns[pattern]) {
						 if (visited.has(neighbour)) continue;
						 visited.add(neighbour);
						 queue.push(neighbour);
					}
			  }
		 }
		 count++;
	};

	return 0;
};