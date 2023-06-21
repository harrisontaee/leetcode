/**
 * @link https://leetcode.com/problems/reorder-list/
 */
const reorderList = (head: ListNode | null): void => {
	let slow = head, fast = head?.next;
	while (fast?.next) {
		slow = slow?.next;
		fast = fast.next?.next;
	};

	
	if (!slow || !slow.next) return;
	let root = slow?.next, tail = null;
	slow.next = null;
	while (root) {
		const temp = root.next;
		root.next = tail;
		tail = root;
		root = temp;
	};


	while (tail) {
		let temp1: ListNode | null = head?.next;
		let temp2: ListNode | null = tail?.next;
		head.next = tail;
		tail.next = temp1;
		head = temp1;
		tail = temp2;
	}
};