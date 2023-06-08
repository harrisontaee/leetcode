/**
 * @link https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
export const findMin = (nums: number[]): number => {
	let left = 0, right = nums.length -1;

	while (left < right) {
		const mid = Math.floor((left + right) / 2);

		if (nums[mid] > nums[right]) left = mid + 1;
		else right = mid;
	};

	return nums[left];
};