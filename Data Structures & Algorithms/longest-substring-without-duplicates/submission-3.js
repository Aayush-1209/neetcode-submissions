class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length
        if(n==0){
            return 0;
        }
        if(n===1){
            return 1;
        }
        let max = 0
        let charSet = new Set()
        let i = 0;

        for (let j=0;j<n;j++){

            while(charSet.has(s[j])){
               charSet.delete(s[i])
               i++
            }
            charSet.add(s[j])
            max = Math.max(max , j-i+1)
        }
     
      return max;
       
    }
}