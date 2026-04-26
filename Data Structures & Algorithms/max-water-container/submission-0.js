class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
         let x = 0,y=height.length-1;
    let maxWater = 0
    while(x<y){
      let w = Math.min(height[x],height[y])*(y-x)
      maxWater = Math.max(maxWater,w)
      if(height[x]>=height[y]){
         y--
      }else{
        x++
      }
    }
    return maxWater;
    }
}
