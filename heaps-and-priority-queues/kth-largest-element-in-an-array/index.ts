/**
 * @link https://leetcode.com/problems/kth-largest-element-in-an-array/
 */
const findKthLargest = (nums: number[], k: number): number => {
	const heap: number[] = [];

	for (let num of nums) {
		if (heap.length === k && num <= heap[0]) continue;
		heap.push(num);

		let child = heap.length - 1;
		heapifyUp:
		while (child > 0) {
			const parent = Math.floor((child - 1) / 2);
			if (heap[parent] <= heap[child]) break heapifyUp;
			[heap[parent], heap[child]] = [heap[child], heap[parent]];
			child = parent;
		};

		if (heap.length <= k) continue;
		heap[0] = heap.pop();

		let parent = 0;
		heapifyDown:
		while (parent < heap.length) {
			const left = parent * 2 + 1;
			if (left >= heap.length) break heapifyDown;

			const right = left + 1;
			child =
				right >= heap.length || heap[left] < heap[right] ? left : right;
			if (heap[parent] <= heap[child]) break heapifyDown;
			[heap[parent], heap[child]] = [heap[child], heap[parent]];
			parent = child;
		};
	};

	return heap[0];
};