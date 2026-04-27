class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tFreq = {};
        let n = s.length;
        let m = t.length;
        let startI = null;
        let minF = Infinity;

        for (let i = 0; i < m; i++) {
            if (tFreq[t[i]] === undefined) {
                tFreq[t[i]] = 1;
            } else {
                tFreq[t[i]]++;
            }
        }

        let i = 0,
            j = 0;
        while (i < n && j < n) {
            if (tFreq[s[j]] !== undefined) {
                if (tFreq[s[j]] > 0) {
                    m--;
                }
                tFreq[s[j]]--;
            }
            while (m === 0 && i < n) {
                if (tFreq[s[i]]!==undefined) {
                    tFreq[s[i]]++;
                    if (tFreq[s[i]] > 0) {
                        m++;
                    }

                    if (minF > (j - i + 1)) {
                        minF = Math.min(j - i + 1, minF);
                        startI = i;
                    }
                }
                i++;
            }
            j++;
        }
        if (minF === Infinity) {
            return "";
        } else {
            return s.substring(startI, startI + minF);
        }
    }
}
