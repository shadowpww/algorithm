/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   let s  = [0,1,2];
   if(n<=2)
    return s[n];
   for(let i =3;i<=n;i++){
       s[i]  = s[i-1] + s[i-2];
   } 
   return s[n];
};
// @lc code=end

