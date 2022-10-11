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
    let stack  = [];
    let value = {
        '(':-1,
        '{':-2,
        '[':-3,
        ')':1,
        "}":2,
        "]":3
    }
    if(s.length ===0) return true;
    stack.push(s[0]);
    for(let i=1;i<=s.length-1;i++){
        if(value[s[i]]<0){
            stack.push(s[i]);
        }else{
            let top = stack[stack.length-1];
            if(value[top] + value[s[i]] !==0){
                return false;
            }else{
                stack.pop();
            }
        } 
    }
    if(stack.length ===0) return true;
    return false;
};
// @lc code=end
