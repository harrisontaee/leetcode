/**
 * @link https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */
const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
	let len = 0;
	let cur = head;
	while (cur) {
		cur = cur.next;
		len++;
	};

	if (n > len) return head;
	if (n === len) return head.next;

	len -= n + 1;
	cur = head;
	while (len > 0) {
		cur = cur.next;
		len--;
	};

	cur.next = cur?.next?.next || null;
	return head;
};