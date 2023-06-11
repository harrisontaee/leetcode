/**
 * @link https://leetcode.com/problems/valid-anagram/
 */
const isAnagram = (s: string, t: string): boolean => { // O(s + t)
	if (s.length !== t.length) return false;

	const chars = {};
	for (let char of s) { // O(s)
		if (char in chars) chars[char]++;
		else chars[char] = 1;
	};

	for (let char of t) { // O(t)
		if (!(char in chars)) return false;
		if (chars[char] === 1) delete chars[char];
		else chars[char]--;
	};

	return true;
};