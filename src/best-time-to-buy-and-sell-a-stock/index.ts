/**
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
export function maxProfit(prices: number[]): number {
	let profit = 0;
	let min = Infinity;

	for (let price of prices) {
		if (price - min > profit) profit = price - min;
		if (price < min) min = price;
	};

	return profit;
};