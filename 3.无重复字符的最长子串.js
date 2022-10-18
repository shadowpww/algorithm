/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let length  = s.length;
  if(length < 2) return length;
  let start = 0;
  let max = 0;
  let gap = -1;
  let map = new Set();
   for(;start<length;start++){
     if(start !== 0){
        map.delete(s[start-1]);
     }
    while(gap + 1 <length && !map.has(s[gap+1])){
        map.add(s[gap+1]);
        gap++;
    }
    max = Math.max(max,gap - start + 1);
  }
  return max;
};
// @lc code=end

