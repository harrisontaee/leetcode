/**
 * @link https://leetcode.com/problems/subsets/
 */
const subsets = (nums: number[]): number[][] => {
	const result: number[][] = [];

	const dfs = (subset: number[], index: number) => {
		result.push(subset);
		for (let i = index; i < nums.length; i++) dfs([...subset, nums[i]], i + 1);
	};

	dfs([], 0);
	return result;
};