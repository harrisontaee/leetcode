/**
 * @link https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 */
const countComponents = (n: number, edges: number[][]): number => {
	const roots = Array.from({length: n}, (_, index) => index);


	const findRoot = (node: number) => {
		 while (node != roots[node]) node = roots[node];
		 return node;
	};


	for (let [node1, node2] of edges) {
		 const root1 = findRoot(node1);
		 const root2 = findRoot(node2);
		 if (root1 == root2) continue;
		 roots[root2] = root1;
		 n--;
	};

	return n;
};