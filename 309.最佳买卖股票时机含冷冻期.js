/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let dp = Array.from({length:prices.length},()=>{
//             return new Array(3).fill(0)
//     });
//     dp[0][0] = -prices[0];
//     dp[0][1] = 0;
//     dp[0][2] = 0;

//     for(let i=1;i<prices.length;i++){
//         dp[i][0] = Math.max(dp[i-1][0],dp[i-1][2] - prices[i]);
//         dp[i][1] = dp[i-1][0]+prices[i];
//         dp[i][2] = Math.max(dp[i-1][1],dp[i-1][2]);
//     }
//     let n  =prices.length;
//     return Math.max(dp[n-1][0],dp[n-1][1],dp[n-1][2]);
// };

var maxProfit = function(prices) {
    let dp = Array.from({length:prices.length},()=>{
            return new Array(2).fill(0)
    });
    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    if(prices.length === 1) return dp[0][0]; 

    dp[1][0] =  Math.max(prices[1] - prices[0],0);
    dp[1][1] = Math.max(-prices[1],-prices[0]);

    for(let i=2;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-2][0]-prices[i]);
    }
    let n  = prices.length;
    return dp[n-1][0];
};

// @lc code=end

