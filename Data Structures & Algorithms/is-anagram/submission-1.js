class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let arr = new Array(26).fill(0)
        for(let i= 0 ; i < s.length ; i++ ){ 
          arr[s.charCodeAt(i)- 'a'.charCodeAt(0)]++;
          arr[t.charCodeAt(i)- 'a'.charCodeAt(0)]--;          
        }
        
         const res = arr.every((val)=>val===0)
         return res;
             }
}
