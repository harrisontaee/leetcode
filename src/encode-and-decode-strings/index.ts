const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];




/**
 * @link https://leetcode.com/problems/encode-and-decode-strings/
 */
const encode = (strs: string[]): string => {
	let code = "";
	for (let str of strs) {
		for (let char of str) {
			let ascii = char.charCodeAt(0);
			let char1 = Math.floor(ascii / 16);
			let char2 = ascii - (char1 * 16);
			code += hex[char1] + hex[char2];
		};
		code += "#";
	};
	return code.slice(0, -1);
};




/**
 * @link https://leetcode.com/problems/encode-and-decode-strings/
 */
const decode = (s: string): string[] => {
	const words: string[] = [];
	const strs = s.split("#");
	for (let str of strs) {
		let asciis: number[] = [];
		for (let i = 0; i < str.length; i += 2) asciis.push((16 * parseInt(str.charAt(i), 16)) + parseInt(str.charAt(i + 1), 16));
		words.push(String.fromCharCode(...asciis));
	};
	return words;
};