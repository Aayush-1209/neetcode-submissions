/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        let res = [];

        let queue = [];
        let front = 0;

        queue.push(root);

        while (front < queue.length) {
            let qlen = queue.length - front;
            let deck = [];
            for (let i = 0; i < qlen; i++) {
                let node = queue[front++];
                if (node) {
                    deck.push(node.val);
                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                }
            }
            res.push(deck);
        }
        return res;
    }
}
