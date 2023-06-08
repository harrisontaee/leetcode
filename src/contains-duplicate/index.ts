/**
 * @link https://leetcode.com/problems/contains-duplicate/
 */
export const containsDuplicate = (nums: number[]): boolean => nums.length !== new Set(nums).size;