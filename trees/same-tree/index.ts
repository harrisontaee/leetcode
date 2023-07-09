const isSubtree = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
	if (!root) return !subRoot;
	if (!subRoot) return !root;
	return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};



const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
	if (!p) return !q;
	if (!q) return !p;
	return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
