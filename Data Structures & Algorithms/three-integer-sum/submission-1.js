class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    
    threeSum(nums) {

       let  res = [];
      function  twoSum(nums,i,target,j){

           while(i<j){
                if(nums[i]+nums[j]>target){
                j--
                }
                 else if(nums[i]+nums[j]<target){
                   i++
                   }
            else {
                while(nums[i]===nums[i+1] && i<j){
                i++
                  }
             while(nums[j]===nums[j-1] && j>i){
                j--
             }
             res.push([-target,nums[i],nums[j]])
             i++
             j--
            }
        }
    }

        

        let n = nums.length;
        if(n<3){
            return [];
        }
        nums= nums.sort((a,b)=>a-b)
        for(let i=0;i<n;i++){
            if(i>0 && nums[i]===nums[i-1]){
                continue;
            }
           const twsm =  twoSum(nums,i+1,(-nums[i]),n-1)
        }
        return res

    }
}
