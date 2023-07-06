class LRUCache {
	capacity: number;
	map: Map<number, number>;



	constructor(capacity: number) {
		this.capacity = capacity;
		this.map = new Map();
	}



	get(key: number): number {
		if (!this.map.has(key)) return -1;
		const value = this.map.get(key);
		this.map.delete(key);
		this.map.set(key, value);
		return value;
	};



	put(key: number, value: number): void {
		if (this.map.size >= this.capacity && !this.map.has(key)) {
			const first = this.map.keys().next().value;
			this.map.delete(first);
		};
		
		this.map.delete(key);
		this.map.set(key, value);
	}
}
