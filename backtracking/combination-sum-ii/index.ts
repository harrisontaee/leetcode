/**
 * @link https://leetcode.com/problems/combination-sum-ii/
 */
const combinationSum2 = (candidates: number[], target: number): number[][] => {
	candidates.sort((a, b) => a - b);
	const combinations: number[][] = [];

	const backtrack = (nums: number[] = [], sum: number = 0, index: number = 0) => {
		 if (sum >= target || index === candidates.length) {
			  if (sum === target) combinations.push(nums);
			  return;
		 };

		 backtrack([...nums, candidates[index]], sum + candidates[index], index + 1);
		 while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]) index++;
		 backtrack(nums, sum, index + 1);
	};

	backtrack();
	return combinations;
};