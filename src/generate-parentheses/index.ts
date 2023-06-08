/**
 * @link https://leetcode.com/problems/generate-parentheses/
 */
export const generateParenthesis = (n: number): string[] => {
	const parentheses: string[] = [];
	const current: string[] = [];


	const recurse = (open: number, closed: number) => {
		if (open === closed && open == n) parentheses.push(current.join(""));
		if (open < n) {
			current.push("(");
			recurse(open + 1, closed);
			current.pop();
		};

		if (closed < open) {
			current.push(")");
			recurse(open, closed + 1);
			current.pop();
		}
	};


	recurse(0, 0);
	return parentheses;
};