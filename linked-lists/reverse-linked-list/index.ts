/**
 * @link https://leetcode.com/problems/reverse-linked-list/
 */
const reverseList = (head: ListNode | null): ListNode | null => {
	let prev: ListNode | null = null;

	while (head) {
	  prev = new ListNode(head.val, prev);
	  head = head.next;
	}

	return prev;
};