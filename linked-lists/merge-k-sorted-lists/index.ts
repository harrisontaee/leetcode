/**
 * @link https://leetcode.com/problems/merge-k-sorted-lists/
 */
const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
	if (!lists.length) return null;
	if (lists.length === 1) return lists[0];

	const newLists = [];
	while (lists.length > 1) newLists.push(mergeList(lists.pop(), lists.pop()));
	if (lists.length) newLists.push(lists.pop());
	
	return mergeKLists(newLists);
};




const mergeList = (a: ListNode | null, b: ListNode | null): ListNode | null => {
	let head = new ListNode();
	let pntr = head;

	while (a || b) {
		if (!a || (b && b.val <= a.val)) {
			pntr.next = b;
			pntr = pntr.next;
			b = b.next;
		} else if (!b || (a && a.val <= b.val)) {
			pntr.next = a;
			pntr = pntr.next;
			a = a.next;
		};
	};

	return head.next;
};