class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function binarySearch(i, j, nums, target) {
            let idx = -1;
            while (i <= j) {
                let mid = Math.floor(i + (j - i) / 2);
                if (nums[mid] === target) {
                    idx = mid;
                    break;
                } else if (nums[mid] < target) {
                    i = mid + 1;
                } else {
                    j = mid - 1;
                }
            }
            return idx;
        }

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
        console.log(r);

        let minIdx = binarySearch(0, r - 1, nums, target);

        if (minIdx != -1) {
            return minIdx;
        }
        minIdx = binarySearch(r, n - 1, nums, target);
        return minIdx;
    }
}
