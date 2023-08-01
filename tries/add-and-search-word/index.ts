class WordDictionary {
	children: {[char: string]: WordDictionary};
	isWord: boolean;
	constructor() {
		this.children = {};
		this.isWord = false;
	};



	addWord(word: string): void {
		let cur: WordDictionary = this;

		for (let char of word) {
			if (!(char in cur.children)) cur.children[char] = new WordDictionary();
			cur = cur.children[char];
		};

		cur.isWord = true;
	};



	search(word: string, i = 0): boolean {
		let cur: WordDictionary = this;
		for (; i < word.length; i++) {
			let char = word[i];

			if (char !== ".") {
				if (!(char in cur.children)) return false;
				cur = cur.children[char];
				continue;
			}

			for (let key in cur.children) {
				if (cur.children[key].search(word, i + 1)) return true;
			}

			return false;
		};

		return cur.isWord;
	};
}
