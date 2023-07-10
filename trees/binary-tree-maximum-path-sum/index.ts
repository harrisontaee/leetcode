const maxPathSum = (root: TreeNode | null): number => {
	let max = -Infinity;

	const dfs = (node: TreeNode | null): number => {
		if (!node) return 0;
		const left = dfs(node.left);
		const right = dfs(node.right);
		max = Math.max(max, node.val + left + right);
		return Math.max(0, Math.max(node.val + left, node.val + right));
	};

	dfs(root);
	return max;
};
