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

        function mergeTwoLists(list1, list2) {
            if (list1 === null && list2 === null) {
                return [];
            }

            if (list1 === null) {
                return list2;
            }
            if (list2 === null) {
                return list1;
            }

            if (list1.val <= list2.val) {
                list1.next = mergeTwoLists(list1.next, list2);
                return list1;
            } else {
                list2.next = mergeTwoLists(list2.next, list1);
                return list2;
            }
        }
    }
}