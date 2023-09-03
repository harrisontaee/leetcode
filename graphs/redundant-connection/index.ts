const findRedundantConnection = (edges: number[][]): number[] => {
	const roots: number[] = Array.from({length: edges.length + 1}, (_, index) => index);


	const find = (node: number): number => {
		 while (roots[node] != node) node = roots[node];
		 return node;
	};


	for (let [node1, node2] of edges) {
		 const root1 = find(node1);
		 const root2 = find(node2);
		 if (root1 == root2) return [node1, node2];
		 roots[root2] = root1;
	};

	return [];
};