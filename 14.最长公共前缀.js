/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let longest = strs[0];
  for (let i = 1; i <= strs.length - 1; i++) {
    let idx = 0;
    while (
      longest[idx] == strs[i][idx] &&
      idx <= strs[i].length - 1 &&
      idx <= longest.length - 1
    ) {
      idx++;
    }
    if (idx === 0) return "";
    longest = longest.slice(0, idx);
  }
  return longest;
};
// @lc code=end
