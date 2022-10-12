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
var maxProfit = function(prices) {
    const length = prices.length;
    if(length <2) return 0;
    const dp = new Array(length).fill(0);
    let min = prices[0], max = 0;
    for(let i=1;i<length;i++){
        dp[i] = Math.max(dp[i-1],prices[i] > min ? prices[i] - min : 0);
        max = Math.max(dp[i],dp[i-1]);
        min = Math.min(min,prices[i]);
    }
    return max;
};
// @lc code=end

