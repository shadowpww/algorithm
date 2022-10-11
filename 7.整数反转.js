/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let flag = x < 0 ? "-" : "";
  let num = Math.abs(x);
  let i = 0;
  let j = String(num).length - 1;
  let res = new Array(j + 1);
  while (i <= j) {
    res[i] = String(num)[j];
    res[j] = String(num)[i];
    j--;
    i++;
  }
  let final = Number(flag + res.join(""));
  if (final < Math.pow(-2, 31) || final > Math.pow(2, 31) - 1) {
    return 0;
  }
  return final;
};
// @lc code=end
