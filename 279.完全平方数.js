/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function(n) {
    let map = [1];
    let dp = new Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3;i<=n;i++){
        let min = Infinity;
        for(let j=1;j * j <= i;j++){
               min = Math.min(dp[i-j*j],min);
        }
        dp[i]  = min+1;
    }  
    return dp[n];
};
// @lc code=end

