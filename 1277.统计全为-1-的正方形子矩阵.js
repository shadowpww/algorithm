/*
 * @lc app=leetcode.cn id=1277 lang=javascript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
// dp[i][j] 表示以ij为右下角顶点的正方形个数

var countSquares = function(matrix) {
    let m = matrix.length;
    if(m.length ===0) return 0;
    let n = matrix[0].length;
    let dp = Array.from({length:m},()=>{
        return new Array(n).fill(0);
    });
    let count =0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] === 0){
                dp[i][j] = 0;
            }else if(matrix[i][j] === 1){
                if(i == 0 || j==0){
                    dp[i][j] = 1;
                }else{
                    dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1;
                }
                count += dp[i][j];
            }
        }
    }
    return count;
};
// @lc code=end

