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
     * @return {boolean}
     */
    isValidBST(root) {
        const min = -Infinity;
        const max = Infinity;
        return validChildBST(root, min, max);

        function validChildBST(root, min, max) {
            if (!root) {
                return true;
            }
            if (min !== null && root.val <= min.val) {
                return false;
            }
            if (max !== null && root.val >= max.val) {
                return false;
            }

            return validChildBST(root.left, min, root) && validChildBST(root.right, root, max);
        }
    }
}
