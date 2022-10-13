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
    let length = s.length;
    if(s.length <= 1) return s.length;
    let start = end = 0;
    let max = 0;
    let map = new Map();
    for(let end =0;end<length;end++){
        let char = s[end];
        if(map.has(char)){
            start = Math.max(map.get(char) + 1,start);
        }
        max = Math.max(max,end - start + 1);
            map.delete(char);
            map.set(char,end);
    }
    return max;
};
// @lc code=end

