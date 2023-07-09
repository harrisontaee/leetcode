const rightSideView = (root: TreeNode | null): number[] => {
	const levels: number[] = [];

	let max = -1;
	const dfs = (node: TreeNode | null, level: number): void => {
		if (!node) return;
		if (level > max) {
			levels.push(node.val);
			max = level;
		};

		dfs(node.right, level + 1);
		dfs(node.left, level + 1);
	};

	dfs(root, 0);
	return levels;
};