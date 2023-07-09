const levelOrder = (root: TreeNode | null): number[][] => {
	const levels: number[][] = [];

	const dfs = (node: TreeNode | null, level: number): void => {
		if (!node) return;
		if (levels.length === level) levels.push([]);
		levels[level].push(node.val);

		dfs(node.left, level + 1);
		dfs(node.right, level + 1);
	};

	dfs(root, 0);
	return levels;
};