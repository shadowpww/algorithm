/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) {
//     let m = board.length; 
//     if(m===0) return false;
//     if(!word) return true;
//     let n = board[0].length;
//     //记录目前为止哪些元素已经被访问过。
//     let visited = Array.from({length:m},()=>{
//         return new Array(n).fill(false);
//     });
//     function dfs (board,i,j,index){
//         if(index >= word.length) return true;
//         if(i>=m || j>=n || i<0 || j<0) return false;
//         if(visited[i][j]) return false
//         if(board[i][j] != word[index]) return false;
//         visited[i][j]=true;
//         // 上
//         if(i-1>=0 && !visited[i-1][j]){
//           let flag =   dfs(board,i-1,j,index+1);
//           if(flag) return true;
//         }
//         // 尝试向右走
//         if(j+1 <n && !visited[i][j+1]){
//           let flag =  dfs(board,i,j+1,index+1);
//           if(flag)  return true;
//         }
//         // 下
//         if(i+1 <m &&!visited[i+1][j]){
//            let flag = dfs(board,i+1,j,index+1);
//            if(flag) return true;
//         }
//         // 左
//         if(j-1>=0 && !visited[i][j-1]){
//            let  flag =  dfs(board,i,j-1,index+1);
//            if(flag) return true;
//         }
//         visited[i][j] =false;
//         return false;
//     }
//     for(let i=0;i<m;i++){
//         for(let j=0;i<n;j++){
//             if(dfs(board,i,j,0)){
//                 return true;
//             }
//         }
//     }
//     return res;
// };
var exist = function(board, word) {
    const h = board.length, w = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = new Array(h);
    for (let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(w).fill(false);
    }
    const check = (i, j, s, k) => {
        if (board[i][j] != s.charAt(k)) {
            return false;
        } else if (k == s.length - 1) {
            return true;
        }
        visited[i][j] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let newi = i + dx, newj = j + dy;
            if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
                if (!visited[newi][newj]) {
                    const flag = check(newi, newj, s, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

