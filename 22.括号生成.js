/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const dp = new Array(n).fill([]);
   dp[0] = []; dp[1] = ["()"];
   for(let i=2;i<=n;i++){
    let tmp = [];
    dp[i-1].forEach(v=>{
        let length = v.length;
        for(let j=0;j<length;j++){
            tmp.push(v.slice(0,j+1)+"()"+v.slice(j+1));
        }
     })
     dp[i] = Array.from(new Set(tmp));
   }
  return dp[n];
};
// @lc code=end

