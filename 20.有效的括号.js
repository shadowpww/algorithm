/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
   let map = {
    '(':')',
    "[":"]",
    "{":"}",
   };
   let lftMap = new Set(["[","{","("]);
   let stack = [];
   for(let i=0;i<s.length;i++){
    let curStr = s[i];
    if(lftMap.has(curStr)){
        stack.push(curStr);
    }else{
        let stackTop = stack.pop();
        if(map[stackTop] === curStr) continue;
        return false;
    }
   }
   if(stack.length > 0)return false;
   return true
};
// @lc code=end
