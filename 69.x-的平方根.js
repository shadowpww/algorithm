/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i =0 ;
    if(x <= 1)return x;
   while(i <= Math.floor(x/2)+1){
       if(i*i === x){
           return i;
       }else if(i*i > x){
           return i-1;
       }
       i++;
   }
   return 0;
};
// @lc code=end

