/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  const indexMap = {
    I: 0,
    V: 1,
    X: 2,
    L: 3,
    C: 4,
    D: 5,
    M: 6,
  };
  const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let length = s.length;
  if (length <= 1) {
    return valueMap[s] || 0;
  }
  for (let i = 0; i <= s.length - 1; ) {
    let j = i + 1;
    if (!s[j]) {
      res += valueMap[s[i]];
      break;
    }
    if (valueMap[s[j]] - valueMap[s[i]] <= 0) {
      res += valueMap[s[i]];
      i += 1;
    } else {
      res += valueMap[s[j]] - valueMap[s[i]];
      i += 2;
    }
  }
  return res;
};
// @lc code=end
