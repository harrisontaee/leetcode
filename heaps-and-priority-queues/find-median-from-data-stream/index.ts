/**
 * @link https://leetcode.com/problems/find-median-from-data-stream/
 */
class MedianFinder {
	small: Heap = new Heap(true);
	large: Heap = new Heap(false);


	addNum = (num: number) => {
		const [smalls, small] = [this.small.size(), this.small.peek()];
		const [larges, large] = [this.large.size(), this.large.peek()];

		if (smalls === larges) {
			if (smalls && num >= small) return this.large.insert(num);
			this.small.insert(num);
		} else if (smalls > larges) {
			if (num >= small || (larges && num >= large))
				return this.large.insert(num);
			this.large.insert(this.small.shift());
			this.small.insert(num);
		} else {
			if (num <= large || (smalls && num <= small))
				return this.small.insert(num);
			this.small.insert(this.large.shift());
			this.large.insert(num);
		};
	};


	findMedian = () => {
		const smalls = this.small.size();
		const larges = this.large.size();
		if (smalls > larges) return this.small.peek();
		else if (larges > smalls) return this.large.peek();
		return (this.small.peek() + this.large.peek()) / 2;
	};
};





class Heap {
	heap: number[] = [];
	isMax: boolean;
	constructor(isMax: boolean = false) {
		this.isMax = isMax;
	};


	size = () => this.heap.length;
	peek = () => (this.size() ? this.heap[0] : null);
	swap = (i: number, j: number) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]);
	isHigher = (i: number, j: number): boolean => this.isMax ? this.heap[i] >= this.heap[j] : this.heap[i] < this.heap[j];
	insert = (number: number) => {
		this.heap.push(number);

		let child = this.size() - 1;
		while (child > 0) {
			const parent = Math.floor((child - 1) / 2);
			if (this.isHigher(parent, child)) break;
			this.swap(parent, child);
			child = parent;
		};
	};


	shift = (): number => {
		this.swap(0, this.size() - 1);
		const root = this.heap.pop();

		let parent = 0;
		while (parent < this.size()) {
			const left = parent * 2 + 1;
			if (left >= this.size()) break;
			const right = left + 1;
			const child =
				right >= this.size() || this.isHigher(left, right) ? left : right;
			if (this.isHigher(parent, child)) break;
			this.swap(parent, child);
			parent = child;
		}

		return root;
	};
};
