/**
 * @link https://leetcode.com/problems/clone-graph/
 */
const cloneGraph = (node: Node | null): Node | null => {
	if (!node) return null;

	const queue: Node[] = [];
	const map = new Map<number, Node>();

	queue.push(node); // @ts-ignore
	map.set(node.val, new Node(node.val));

	while (queue.length > 0) {
		const original = queue.shift(); // @ts-ignore
		const copy = map.get(original.val);

		// @ts-ignore
		for (let neighbor of original.neighbors) {
			if (!map.has(neighbor.val)) { // @ts-ignore
				map.set(neighbor.val, new Node(neighbor.val));
				queue.push(neighbor);
			}

			// @ts-ignore
			copy.neighbors.push(map.get(neighbor.val));
		};
	};

	return map.get(1);
};
