const permute = (nums: number[]): number[][] => {
	const result: number[][] = [];


	const dfs = (permutation: number[] = []) => {
		if (permutation.length === nums.length) {
			result.push(permutation);
			return;
		};

		for (let num of nums) {
			if (!permutation.includes(num)) {
				dfs([...permutation, num]);
			};
		};
	};


	dfs();
	return result;
};
