/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = Array.from({length:grid.length},(v)=>{
        return new Array(grid[0].length).fill(0);
    })
    let m  =  grid.length;
    let n = grid[0].length;
    dp[0][0] = grid[0][0];
    for(let j=1;j<n;j++){
        dp[0][j] = grid[0][j] + dp[0][j-1];
    }
    for(let i=1;i<m;i++){
        dp[i][0] = grid[i][0] + dp[i-1][0];
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];
        }
    }
    return dp[m-1][n-1];
};
// @lc code=end

