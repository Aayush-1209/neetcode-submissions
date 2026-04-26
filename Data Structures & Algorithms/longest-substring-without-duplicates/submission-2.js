class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let obj = {}
        let res = 0;
        let i=0;
        for(let j=0;j<s.length;j++){

            if(obj[s[j]]!==undefined){
                i = Math.max( obj[s[j]]+1 , i)
            }

            obj[s[j]] = j

            res = Math.max(res , j-i+1)
        }
        return res ;
    }
}
