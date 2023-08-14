/**
 * @link https://leetcode.com/problems/palindrome-partitioning/
 */
const partition = (s: string): string[][] => {
	const result: string[][] = [];
	const current: string[] = [];


	const isPalindrome = (left: number = 0, right: number = 0): boolean => {
		while (left < right) {
			if (s.charAt(left) !== s.charAt(right)) return false;
			right--;
			left++;
		};

		return true;
	};


	const backtrack = (left: number = 0) => {
		if (left >= s.length) {
			result.push([...current]);
			return;
		};

		for (let right = left; right < s.length; right++) {
			if (!isPalindrome(left, right)) continue;
			current.push(s.slice(left, right + 1));
			backtrack(right + 1);
			current.pop();
		};
	};

	
	backtrack();
	return result;
};
