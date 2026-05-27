class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const ans = [];
        const combi = [];
        let i = 0;

        dfs(0, target);

        return ans;

        function dfs(i, target) {
            if (target === 0) {
                ans.push([...combi]);
                return;
            }

            if (i === nums.length || target < 0) {
                return;
            }
            combi.push(nums[i]);

            dfs(i, target - nums[i]);

            combi.pop();

            dfs(i + 1, target);
        }
    }
}
