/**
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
const maxProfit = (prices: number[]): number => {
	let maxProfit = 0, left = 0, right = 1;

	while (right < prices.length) {
		let profit = prices[right] - prices[left];
		maxProfit = Math.max(maxProfit, profit);

		if (prices[right] < prices[left]) left = right;
		right++;
	};

	return maxProfit;
};