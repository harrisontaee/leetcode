/**
 * @link https://leetcode.com/problems/reverse-nodes-in-k-group/
 */
const reverseKGroup = (head: ListNode | null, k: number): ListNode | null => {
	if (!head) return null;

	let groups = Math.floor(size(head) / k);
	let gRoot = new ListNode(0, head);
	let root = gRoot;

	for (let g = 0; g < groups; g++) {
		let gTail = head;
		let gPrev = head;
		let gHead = head.next;

		for (let n = 0; n < k - 1; n++) {
			let gNext = gHead.next;
			gHead.next = gPrev;
			gPrev = gHead;
			gHead = gNext;
		};

		gTail.next = gHead;
		gRoot.next = gPrev;
		gRoot = gTail;
		head = gHead;
	};

	return root.next;
};



const size = (head: ListNode | null): number => {
	let pntr = head;
	let count = 0;
	
	while (pntr) {
		count++;
		pntr = pntr.next;
	};

	return count;
};