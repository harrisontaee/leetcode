/**
 * @link https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */
const letterCombinations = (digits: string): string[] => {
	if (!digits.length) return [];

	const current: string[] = [];
	const result: string[] = [];
	const split: string[] = digits.split("");
	const chars = new Map<string, string[]>();
	chars.set("2", ["a", "b", "c"]);
	chars.set("3", ["d", "e", "f"]);
	chars.set("4", ["g", "h", "i"]);
	chars.set("5", ["j", "k", "l"]);
	chars.set("6", ["m", "n", "o"]);
	chars.set("7", ["p", "q", "r", "s"]);
	chars.set("8", ["t", "u", "v"]);
	chars.set("9", ["w", "x", "y", "z"]);

	
	const backtrack = (index: number = 0) => {
		if (index >= digits.length) {
			result.push(current.join(""));
			return;
		};

		for (let char of chars.get(split[index])) {
			current.push(char);
			backtrack(index + 1);
			current.pop();
		};
	};


	backtrack();
	return result;
};
