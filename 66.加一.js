/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let jinwei = 1;
    for(let i= digits.length-1;i>=0;i--){
        let cur = digits[i];
        digits[i] = (cur + jinwei)%10;
        jinwei = Math.floor((cur + jinwei)/10);
    }
    if(jinwei > 0){
        digits.unshift(jinwei);
    }
    return digits;
};
// @lc code=end

