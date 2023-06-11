/**
 * @link https://leetcode.com/problems/permutation-in-string/
 */
const checkInclusion = (s1: string, s2: string): boolean => {
	const counts: {[char: string]: number} = {};

	for (let char of s1) {
		if (char in counts) counts[char]++;
		else counts[char] = 1;
	};

	let l = 0, r = 0;
	while (r < s2.length) {
		const right = s2.charAt(r);

		if (right in counts) {
			while (counts[right] === 0) {
				const left = s2.charAt(l);
				counts[left]++;
				l++;
			};
			counts[right]--;
		} else while (l <= r) {
			const left = s2.charAt(l);
			if (left in counts) counts[left]++;
			l++;
		};

		r++;
		if (r - l >= s1.length) return true;
	};

	
	return false;
};