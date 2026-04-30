/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        function reverse(head) {
            let prev = null;
            let curr = head;
            while (curr !== null) {
                let save = curr.next;
                curr.next = prev;
                prev = curr;
                curr = save;
            }
            return prev;
        }

        let node = head;
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        slow.next = null;
        let mid = reverse(second);

        while (mid !== null) {
           const tmp1 = node.next;
            const tmp2 = mid.next;
            node.next = mid;
            mid.next = tmp1;
            node = tmp1;
            mid = tmp2;
        }
        return;
    }
}
