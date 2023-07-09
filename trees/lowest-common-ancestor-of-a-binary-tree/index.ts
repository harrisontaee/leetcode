const lowestCommonAncestor = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
	while (root) {
		if (p.val === root.val || q.val === root.val) break;

		if (p.val < root.val) {
			if (q.val < root.val) root = root.left;
			else break;
		} else {
			if (q.val > root.val) root = root.right;
			else break;
		};
	};

	return root;
};
