/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Number.MAX_VALUE);
    for(let i=0;i<coins.length;i++){
        if(coins[i] <=amount){
            dp[coins] = 1;
        }
    }
    dp[0] = 0;
    for(let i=1;i<=amount;i++){
        for(let j=0;j<coins.length;j++){
            if(coins[j] > i) continue
            if(coins[j]<=i){
                dp[i] = Math.min(dp[i-coins[j]]+1,dp[i]);
            }
        }
    }
    return dp[amount] === Number.MAX_VALUE ?  -1 : dp[amount];
};
// @lc code=end

