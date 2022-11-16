/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length ==0)return 0;
    let n = prices.length;
    let dp = Array.from({length:prices.length},()=> []);
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for(let i=1;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] - prices[i]);
    }
    return dp[n-1][0];
};
// @lc code=end

