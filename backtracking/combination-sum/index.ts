/**
 * @link https://leetcode.com/problems/combination-sum/
 */
const combinationSum = (candidates: number[], target: number): number[][] => {
	const result: number[][] = [];


	const backtrack = (subset: number[] = [], sum: number = 0, index: number = 0) => {
		if (sum >= target) {
			if (sum === target) result.push(subset);
			return;
		};

		for (let i = index; i < candidates.length; i++) {
			const candidate = candidates[i];
			backtrack([...subset, candidate], sum + candidate, i);
		};
	};

	
	backtrack();
	return result;
};