/**
 * @link https://leetcode.com/problems/k-closest-points-to-origin/
 */
const kClosest = (points: number[][], k: number): number[][] => {
	const heap: number[][] = [];
	const get = (i: number): number => heap[i][2];
	const swap = (i: number, j: number) => ([heap[i], heap[j]] = [heap[j], heap[i]]);


	for (let [x, y] of points) {
		const distance = Math.sqrt(x ** 2 + y ** 2);
		if (heap.length === k && distance > get(0)) continue;

		heap.push([x, y, distance]);
		let child = heap.length - 1;
		up:
		while (child > 0) {
			const parent = Math.floor((child - 1) / 2);
			if (get(parent) >= get(child)) break up;
			swap(parent, child);
			child = parent;
		};

		if (heap.length <= k) continue;
		heap[0] = heap.pop();
		let parent = 0;
		down:
		while (parent < heap.length) {
			const left = parent * 2 + 1;
			if (left >= heap.length) break down;
			const right = left + 1;
			const child =
				right >= heap.length || get(left) > get(right) ? left : right;
			if (get(parent) >= get(child)) break down;
			swap(parent, child);
			parent = child;
		};
	};

	
	for (let item of heap) item.pop();
	return heap;
};
