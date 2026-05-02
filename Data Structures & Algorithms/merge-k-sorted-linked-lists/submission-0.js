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
    mergeKLists(lists) {
        let k = lists.length;

        if (k === 0) {
            return null;
        }

        return partition(0, k - 1);

        function partition(s, e) {
            if (s === e) return lists[s];

            let mid = Math.floor((s + e) / 2);

            let l1 = partition(s, mid);
            let l2 = partition(mid + 1, e);

            return mergeTwoLists(l1, l2);
        }

        function mergeTwoLists(l1, l2) {
            let dummy = new ListNode(0);
            let tail = dummy;

            while (l1 && l2) {
                if (l1.val <= l2.val) {
                    tail.next = l1;
                    l1 = l1.next;
                } else {
                    tail.next = l2;
                    l2 = l2.next;
                }
                tail = tail.next;
            }

            tail.next = l1 || l2;

            return dummy.next;
        }
    }
}