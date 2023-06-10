/**
 * @link https://leetcode.com/problems/longest-repeating-character-replacement/
 */
const characterReplacement = (s: string, k: number): number => {
	const counts: {[char: string]: number} = {};
	let maxCount = 0, maxLength = 0;

	for (let l = 0, r = 0; r < s.length; r++) {
		const right = s[r];

		if (right in counts) counts[right]++;
		else counts[right] = 1;

		maxCount = Math.max(maxCount, counts[right]); 

		while (r - l + 1 - maxCount > k) {
			const left = s[l];
			counts[left]--;
			l++;
		}

		maxLength = Math.max(maxLength, r - l + 1);
	}

	return maxLength;
};