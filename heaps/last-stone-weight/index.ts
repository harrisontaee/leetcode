/**
 * @link https://leetcode.com/problems/last-stone-weight/
 */
const lastStoneWeight = (stones: number[]): number => {
	const heap = new MaxHeap(stones);
	while (heap.size() > 1) heap.insert(heap.shift() - heap.shift());
	return heap.peek() || 0;
};



class MaxHeap {
	heap: number[] = [];
	constructor(numbers: number[]) {
		for (let number of numbers) this.insert(number);
	};


	swap = (i: number, j: number) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]);
	size = (): number => this.heap.length;
	peek = (): number | null => (!!this.size() ? this.heap[0] : null);
	insert = (number: number) => {
		if (!number) return;
		this.heap.push(number);
		let child = this.size() - 1;
		while (child > 0) {
			const parent = Math.floor((child - 1) / 2);
			if (this.heap[parent] >= this.heap[child]) break;
			this.swap(parent, child);
			child = parent;
		}
	};


	shift = (): number => {
		this.swap(0, this.size() - 1);
		const max = this.heap.pop();

		let parent = 0;
		while (parent < this.size()) {
			const left = 2 * parent + 1;
			if (left >= this.size()) break;
			const right = left + 1;
			const child = right >= this.size() || this.heap[left] > this.heap[right] ? left : right;
			if (this.heap[parent] >= this.heap[child]) break;
			this.swap(parent, child);
			parent = child;
		};

		return max;
	};
};