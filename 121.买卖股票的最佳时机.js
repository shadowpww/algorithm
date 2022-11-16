/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     const length = prices.length;
//     const dp = new Array(length);
//     for(let i=0;i++;i<length){
//         dp[i] = new Array(length).fill(0);
//     }
//     let max = 0;
//     for(let i=0;i<length;i++){
//         for(let j=i+1;j<length;j++){
//             const purchasePri = prices[i];
//             const salePri = prices[j];
//             if(salePri < purchasePri || salePri === 0) break;
//             const outPut = salePri - purchasePri > 0 ?  salePri - purchasePri  : 0;
//             if(outPut > max ) max = outPut;
//         }
//     }
//     return max
// };

// var maxProfit = function(prices) {
//     const length = prices.length;
//     if(length <2) return 0;
//     const dp = new Array(length).fill(0);
//     let min = prices[0], max = 0;
//     for(let i=1;i<length;i++){
//         dp[i] = Math.max(dp[i-1],prices[i] > min ? prices[i] - min : 0);
//         max = Math.max(dp[i],dp[i-1]);
//         min = Math.min(min,prices[i]);
//     }
//     return max;
// };

// var maxProfit = function(prices) {
//     if(prices.length ==0)return 0;
//     let dp = new Array(prices.length).fill(0);
//     dp[0] = prices[0];
//     let max = 0;
//     for(let i=1;i<prices.length;i++){
//         dp[i] = Math.min(prices[i],dp[i-1]);
//         max = Math.max(max,prices[i] - dp[i-1]);
//     }
//     return max;
// };

var maxProfit = function(prices) {
    // if(prices.length ==0)return 0;
    // // let dp = new Array(prices.length).fill(0);
    // // dp[0] = prices[0];
    // let dp = Array.from({length:prices.length},()=> []);
    // let n = prices.length;
    // dp[0][0] = 0;
    // dp[0][1] = -prices[0];
    // for(let i=1;i<prices.length;i++){
    //     dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);
    //     dp[i][1] = Math.max(-prices[i],dp[i-1][1]);
    // }
    // return dp[n-1][0];
    if(prices.length ==0)return 0;
    let n = prices.length;
    let dp = new Array({length:n+1},()=> []);
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for(let i=1;i<prices.length;i++){
        console.log('dp',i,dp);
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] - prices[i]);
    }
    return dp[n-1][0];
};

// @lc code=end

