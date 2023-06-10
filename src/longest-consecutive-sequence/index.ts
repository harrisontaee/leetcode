/**
 * @link https://leetcode.com/problems/longest-consecutive-sequence/
 */
const longestConsecutive = (nums: number[]): number => {
	const set = new Set(nums);
	let longest = 0;

	for (let num of set) {
		if (set.has(num - 1)) continue;
		let curr = num;
		while (set.has(curr + 1)) curr++;
		longest = Math.max(longest, curr - num + 1);
	};

	return longest;
};