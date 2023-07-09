const goodNodes = (root: TreeNode | null): number => {
	let nodes = 0;
	const dfs = (node: TreeNode | null, max: number = -Infinity) => {
		if (!node) return;
		if (node.val >= max) {
			max = node.val;
			nodes++;
		}

		dfs(node.left, max);
		dfs(node.right, max);
	};

	dfs(root);
	return nodes;
};
