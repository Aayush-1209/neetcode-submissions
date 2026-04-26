class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) { const numSet = new Set(nums);

   if (nums.length === 0) {
    return 0;
} 
    let maxLen = 0;

    for (let num of numSet) {
        
        if (!numSet.has(num - 1)) {
            let currNum = num;
            let currStreak = 1;

            while (numSet.has(currNum + 1)) {
                currNum += 1;
                currStreak += 1;
            }

            maxLen = Math.max(maxLen, currStreak);
        }
    }

    return maxLen;}
}
