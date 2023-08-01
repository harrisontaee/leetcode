class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean;
    constructor () {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;
    };
};





/**
 * @link https://leetcode.com/problems/implement-trie-prefix-tree/
 */
class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    };


    private set(str: string): void {
        let cur = this.root;

        for (let char of str) {
            if (!cur.children.has(char)) cur.children.set(char, new TrieNode());
            cur = cur.children.get(char);
        };

        cur.isEnd = true;
    };


    private get(str: string): TrieNode | null {
        let cur = this.root;

        for (let char of str) {
            if (!cur.children.has(char)) return null;
            cur = cur.children.get(char);
        };

        return cur;
    };

	 
    insert = (str: string): void => this.set(str);
    search = (str: string): boolean => !!this.get(str)?.isEnd;
    startsWith = (str: string): boolean =>  !!this.get(str);
};