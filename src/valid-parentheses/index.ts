const Open = new Set<string>(['(', '[', '{']);
const Closed = new Set<string>([')', ']', '}']);

/**
 * @link https://leetcode.com/problems/valid-parentheses/
 */
const isValid = (str: string): boolean => {
	const opened: string[] = [];
	
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (Open.has(char)) opened.push(char);
		else if (Closed.has(char)) {
			if (!opened.length) return false;
			switch (opened.pop()) {
				case "(":
					if (char !== ")") return false;
					break;
				case "[":
					if (char !== "]") return false;
					break;
				case "{":
					if (char !== "}") return false;
					break;
			}
		};
	};

	return !opened.length;
};