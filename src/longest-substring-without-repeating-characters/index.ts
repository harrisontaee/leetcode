/**
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
export const lengthOfLongestSubstring = (s: string): number => {
	let max = 0;
	const map = new Map<string, number>();

	for (let l = 0, r = 0; r < s.length; r++) {
		const right = s.charAt(r);
		
		if (map.has(right)) l = Math.max(l, map.get(right)! + 1);

		map.set(right, r);
		max = Math.max(max, r - l + 1);

		console.log(l, r, max, map);
	};

	return max;
};


console.log(lengthOfLongestSubstring("dvdf"));