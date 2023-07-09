const diameterOfBinaryTree = (root: TreeNode | null): number => {
	let max = 0;

	const dfs = (node: TreeNode | null): number => {
		if (!node) return 0;
		let left = dfs(node.left);
		let right = dfs(node.right);
		max = Math.max(max, left + right);
		return Math.max(left, right) + 1;
	};

	dfs(root);
	return max;
};
