class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let n = nums.length;
        let l = 0,
            r = n - 1;

        while (l < r) {
            let mid = Math.floor(l + (r - l) / 2);
            if (nums[mid] > nums[r]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return nums[r];
    }
}
