/**
 * @link https://leetcode.com/problems/largest-rectangle-in-histogram/
 */
export const largestRectangleArea = (heights: number[]): number => {
	const stack: number[] = [];
	let maxArea: number = 0;

	for (let i = 0; i < heights.length; i += 1) {
		if (!stack.length || heights[i] > heights[i - 1]) {
			stack.push(i);
			continue;
		} else if (heights[i] === heights[i - 1]) {
			stack[stack.length - 1] = i;
			continue;
		};

		while (!!stack.length && heights[stack[stack.length - 1]] > heights[i]) {
			// @ts-ignore
			const height: number = heights[stack.pop()];
			const width: number = !stack.length ? i : i - (stack[stack.length - 1] + 1);
			maxArea = Math.max(maxArea, height * width);
		};
		stack.push(i);
	}

	while (!!stack.length) {
		// @ts-ignore
		const value: number = heights[stack.pop()];
		const width: number = !stack.length ? heights.length : heights.length - 1 - stack[stack.length - 1];
		maxArea = Math.max(maxArea, value * width);
	}

	return maxArea;
};