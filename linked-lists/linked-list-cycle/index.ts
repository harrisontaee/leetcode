/**
 * @link https://leetcode.com/problems/linked-list-cycle/
 */
const hasCycle = (head: ListNode | null): boolean => {
	if (!head || !head.next) return false;
	
	while (head) {
		if (head.val === Infinity) return true;
		head.val = Infinity
		head = head.next;
	};
	
	return false;
};