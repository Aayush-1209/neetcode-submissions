class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
          let n = s.length;
    let res = 0;
    let count = {};
    let maxF = 0
    let i = 0;
    for(let j=0;j<n;j++){

        count[s[j]] = (count[s[j]] || 0) + 1
        maxF = Math.max(maxF,count[s[j]])

        while( (j-i+1)-maxF > k && i<n ){
            count[s[i]]--
            i++
        }
        res = Math.max(res,j-i+1)
    }
    return res;

    }
}
