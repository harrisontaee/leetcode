/**
 * @link https://leetcode.com/problems/top-k-frequent-elements
 */
const topKFrequent = (nums: number[], k: number): number[] => {
	let freqs: {[num: number]: number} = {};
	for (let num of nums) freqs[num] = (freqs[num] || 0) + 1;

	let array: number[][] = [];
	for (let num in freqs) {
		let freq = freqs[num];
		if (array[freq]) array[freq].push(parseInt(num));
		else array[freq] = [parseInt(num)];
	};

	let result: number[] = [];
	for (let i = array.length - 1; i >= 0; i--) {
		if (!array[i]) continue;
		result.push(...array[i]);
		if (result.length >= k) {
			result = result.slice(0, k);
			break;
		}
	};

	return result;
};