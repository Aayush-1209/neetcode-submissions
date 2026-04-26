class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let i = 0,r=1; 
        let max = 0

        while(r<prices.length){

            if(prices[i]<prices[r]){
                max = Math.max(max , prices[r]-prices[i])
            }
            else{
                i =r
            }
            r++

        }
        return max;
    }
}
