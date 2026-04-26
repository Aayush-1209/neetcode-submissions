class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // optimal approach.
    let res = [];
    let n = nums.length
    //nums [1,2,3,4]
    // left side multiplication[1,1,2,6]
    // right product 1*4*3*2
    // final res [24, 12 ,8,6]

    res[0] = 1
    for(let i=1;i<n;i++){
        res[i] = res[i-1]*nums[i-1]
    }
    let right_prod = 1

    for(let i=n-1;i>=0;i--){
        res[i] = res[i]*right_prod
        right_prod = right_prod*nums[i]
    }
    return res;
    }
}
