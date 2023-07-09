const isBalanced = (root: TreeNode | null): boolean | number => {
	let is = true;

	const dfs = (node: TreeNode | null): number => {
		if (!node) return 0;

		const left = dfs(node.left);
		const right = dfs(node.right);
		if (Math.abs(left - right) > 1) is = false;

		return 1 + Math.max(left, right);
	};

	dfs(root);
	return is;
};
