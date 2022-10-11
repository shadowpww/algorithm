/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let res = true;
  let str_x = String(x);
  let start = 0;
  let end = str_x.length - 1;
  while (start < end) {
    if (str_x[start] == str_x[end]) {
      start++;
      end--;
    } else {
      res = false;
      break;
    }
  }
  return res;
};
// @lc code=end
