const serialize = (root: TreeNode | null): string => {
	const arr: any[] = [];
	const dfs = (node: TreeNode | null) => {
		if (!node) {
			arr.push(null);
			return;
		}

		arr.push(node.val);
		dfs(node.left);
		dfs(node.right);
	};

	dfs(root);
	return arr.join();
};





const deserialize = (data: string): TreeNode | null => {
	if (data === "") return null;

	let prev = -1;
	let curr = data.indexOf(",");
	const peek = () => data.slice(prev + 1, curr);
	const next = () => {
		const val = peek();
		prev = curr;
		curr = data.indexOf(",", prev + 1);
		return parseInt(val);
	};

	const build = () => {
		const node = new TreeNode(next());
		if (peek() === "") next();
		else node.left = build();

		if (peek() === "") next();
		else node.right = build();

		return node;
	};

	return build();
};
