/**
 * @link https://leetcode.com/problems/copy-list-with-random-pointer/
 */
const copyRandomList = (head: Node | null): Node | null => {
	if (!head) return null;
	let map = new Map();
	let cur = head;

	while (cur) {
		map.set(cur, new Node(cur?.val));
		cur = cur.next;
	};
	
	cur = head;
	while (cur) {
		const copy = map.get(cur);
		if (cur.next) copy.next = map.get(cur.next);
		if (cur.random) copy.random = map.get(cur.random);
		cur = cur.next;
	};

	return map.get(head);
};