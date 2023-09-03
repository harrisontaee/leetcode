/**
 * @link https://leetcode.com/problems/graph-valid-tree/
 */
const validTree = (n: number, edges: number[][]): boolean => {
	const roots = Array.from({length: n}, (_, index) => index);

	
	const findRoot = (node: number): number => {
		 while (node != roots[node]) node = roots[node];
		 return node;
	};


	for (let [node1, node2] of edges) {
		 const root1 = findRoot(node1);
		 const root2 = findRoot(node2);
		 if (root1 == root2) return false;
		 roots[root2] = root1;
		 n--;
	};

	return n == 1;
};