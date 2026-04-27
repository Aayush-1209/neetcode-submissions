class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {    let freq = {}; // frequency object for chars in t

    for (let ch of t) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let requiredCount = t.length;
    let i = 0, j = 0;
    let minLen = Infinity;
    let startIndex = 0;

    while (j < s.length) {
        let ch = s[j];
        if (freq[ch] !== undefined) {
            if (freq[ch] > 0) requiredCount--;
            freq[ch]--; // decrease count even if it goes negative
        }

        while (requiredCount === 0) {
            if ((j - i + 1) < minLen) {
                minLen = j - i + 1;
                startIndex = i;
            }

            let startChar = s[i];
            if (freq[startChar] !== undefined) {
                freq[startChar]++;
                if (freq[startChar] > 0) requiredCount++;
            }

            i++;
        }

        j++;
    }

    return minLen === Infinity ? "" : s.substring(startIndex, startIndex + minLen);
}
}
