class KthLargest {
	heap: number[];
	k: number;
	constructor(k: number, nums: number[]) {
		this.k = k;
		this.heap = [];
		for (let num of nums) this.add(num);
	};

	

	swap = (i: number, j: number) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]);
	add = (val: number): number => {
		if (this.heap.length === this.k && this.heap[0] > val) return this.heap[0];

		this.heap.push(val);
		let child = this.heap.length - 1;
		while (child > 0) {
			const parent = Math.floor((child - 1) / 2);
			if (this.heap[parent] <= this.heap[child]) break;
			this.swap(parent, child);
			child = parent;
		};


		while (this.heap.length > this.k) {
			if (this.heap.length === 1) return this.heap[0];
			this.heap[0] = this.heap.pop();

			let parent = 0;
			while (parent < this.heap.length) {
				const left = 2 * parent + 1;
				if (left >= this.heap.length) break;

				const right = left + 1;
				child =
					right >= this.heap.length || this.heap[left] < this.heap[right]
						? left
						: right;

				if (this.heap[parent] <= this.heap[child]) break;
				this.swap(parent, child);
				parent = child;
			};
		};

		
		return this.heap[0];
	};
}
