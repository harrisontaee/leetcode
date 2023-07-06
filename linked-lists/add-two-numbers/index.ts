/**
 * @link https://leetcode.com/problems/add-two-numbers/
 */
const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
	if (!l1) return l2;
	if (!l2) return l1;

	let carry = false;
	let prev = null;
	let one = l1;
	let two = l2;

	while (one || two) {
		if (!one) {
			prev.next = two;
			one = prev.next;
			two = null;
		}

		const sum: number = (one?.val || 0) + (two?.val || 0) + (carry ? 1 : 0);
		one.val = sum % 10;
		carry = sum >= 10;

		prev = one;
		one = one.next;
		if (two) two = two.next;
	}

	if (carry) prev.next = new ListNode(1);

	return l1;
};
