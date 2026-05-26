class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        const n = board.length;
        const m = board[0].length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === word[0] && findCharacters(i, j, 0, directions,n,m,word)) {
                    return true;
                }
            }
        }
        return false;

        function findCharacters(i, j, idx, directions,n,m,word) {
            if (idx >= word.length) {
                return true;
            }
            if (i<0 || j<0 || i >= n || j >= m || board[i][j] !== word[idx] || board[i][j] === "$") {
                return false;
            }

            

            let temp = board[i][j];
            board[i][j] = "$";

            for (let k = 0; k < directions.length; k++) {
                let new_i = i + directions[k][0];
                let new_j = j + directions[k][1];

                if (findCharacters(new_i, new_j, idx + 1, directions,n,m,word)) {
                    return true;
                }
            }
            board[i][j] = temp;
            return false;
        }
    }
}
