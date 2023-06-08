/**
 * @link https://leetcode.com/problems/contains-duplicate/
 */
export function containsDuplicate (nums: number[]): boolean {
	return nums.length !== new Set(nums).size; // O(n)
};