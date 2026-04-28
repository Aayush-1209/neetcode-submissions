class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0) {
            true;
        }
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
                stack.push(s[i]);
            } else if (s[i] === "]" && stack[stack.length - 1] !== "[") {
                return false;
            } else if (s[i] === ")" && stack[stack.length - 1] !== "(") {
                return false;
            } else if (s[i] === "}" && stack[stack.length - 1] !== "{") {
                return false;
            } else {
                stack.pop();
            }
        }
        return stack.length === 0 ? true : false;
    }
}
