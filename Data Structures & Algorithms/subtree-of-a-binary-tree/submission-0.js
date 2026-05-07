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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        } else if (p && !q) {
            return false;
        } else if (!p && q) {
            return false;
        } else if (p.val !== q.val) {
            return false;
        }

        let pqleft = this.isSameTree(p.left, q.left);
        let pqright = this.isSameTree(p.right, q.right);

        if (!pqleft || !pqright) {
            return false;
        }

        return true;
    }
    isSubtree(root, subRoot) {
        if ( !subRoot) {
            return true;
        }
        if (!root) {
            return false;
        }
 
        if (this.isSameTree(root,subRoot)) {
            return true;
        }
        // const leftRoot = this.isSameTree(root.left,subRoot);
        // const rightRoot =this.isSameTree(root.right,subRoot);
        // if(leftRoot || rightRoot){
        //     return true
        // } 
        return (this.isSubtree(root.left , subRoot) || this.isSubtree(root.right,subRoot))

    }
}
