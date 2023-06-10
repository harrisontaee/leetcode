/**
 * @link https://leetcode.com/problems/search-in-rotated-sorted-array/
 */
const search = (nums: number[], target: number): number => {
	let l = 0, r = nums.length - 1;

	while (r - l > 1) {
		const m = Math.floor((l + r) / 2), mid = nums[m];
		if (target === mid) return m;

		const right = nums[r];
		if (mid < right) {
			if (target > mid && target <= right) l = m + 1;
			else r = m - 1;
			continue;
		}
		
		const left = nums[l];
		if (mid > left) {
			if (target >= left && target < mid) r = m - 1;
			else l = m + 1;
			continue;
		};
	};

	return nums[l] === target ? l : nums[r] === target ? r : -1;
};