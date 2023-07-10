const kthSmallest = (root: TreeNode | null, k: number): number => {
	let value = -1;

	const dfs = (node: TreeNode | null) => {
		 if (!node || k <= 0) return;
		 dfs(node.left);
		 k--;
		 if (!k) value = node.val;
		 dfs(node.right);
	};

	dfs(root);
	return value;
};