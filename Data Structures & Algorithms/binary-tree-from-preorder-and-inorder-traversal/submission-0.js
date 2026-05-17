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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

    let preIdx = 0;

    let inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    function build(left, right) {

        if (left > right) {
            return null;
        }

        let rootVal = preorder[preIdx++];
        let root = new TreeNode(rootVal);

        let idx = inorderMap.get(rootVal);
 
        root.left = build(left, idx - 1);
        root.right = build(idx + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);

};
}
