/**
 * @link https://leetcode.com/problems/contains-duplicate/
 */
const containsDuplicate = (nums: number[]): boolean => nums.length !== new Set(nums).size;