/**
 * @link https://leetcode.com/problems/subsets-ii/
 */
const subsetsWithDup = (nums: number[]): number[][] => {
	const result: number[][] = [];
	nums.sort((a, b) => a - b);


	const backtrack = (subset: number[] = [], index: number = 0): void => {
		result.push(subset);
		for (let i = index; i < nums.length; i++) {
			if (i !== index && nums[i] === nums[i - 1]) continue;
			backtrack([...subset, nums[i]], i + 1);
		};
	};


	backtrack();
	return result;
};