/**
 * @link https://leetcode.com/problems/combination-sum/
 */
const combinationSum = (candidates: number[], target: number): number[][] => {
	const result: number[][] = [];


	const dfs = (subset: number[], sum: number, index: number) => {
		if (sum >= target) {
			if (sum === target) result.push(subset);
			return;
		};

		for (let i = index; i < candidates.length; i++) {
			const candidate = candidates[i];
			dfs([...subset, candidate], sum + candidate, i);
		};
	};

	
	dfs([], 0, 0);
	return result;
};