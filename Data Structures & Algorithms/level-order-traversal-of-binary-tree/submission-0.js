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
        queue.push(root);

        while (queue.length) {
            let qlen = queue.length;
            let deck = [];
            for (let i = 0; i < qlen; i++) {
                let node = queue.shift();
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
