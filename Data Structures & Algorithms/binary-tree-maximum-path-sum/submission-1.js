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
     * @return {number}
     */
    maxPathSum(root) {

        let maxSum = -Infinity

        solve(root)

        return maxSum
        
        function solve(root){

            if(!root){
                return 0
            }

            let left = solve(root.left)
            let right = solve(root.right)

            let left_or_right_sum_good = Math.max(left,right) + root.val

            let left_right_divergent = left + right+ root.val

            maxSum  = Math.max(left_or_right_sum_good,left_right_divergent,root.val,maxSum)

            return Math.max(root.val ,left_or_right_sum_good )

        }
    }
}
