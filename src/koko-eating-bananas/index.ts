/**
 * @link https://leetcode.com/problems/koko-eating-bananas/
 */
export const minEatingSpeed = (piles: number[], h: number): number => {
	let left = 1, right = Math.max(...piles);

	while (left < right) {
		const mid = Math.floor((left + right) / 2);

		let hours = 0;
		for (let pile of piles) hours += Math.ceil(pile / mid);

		if (hours <= h) right = mid;
		else left = mid + 1;
	};

	return left;
};