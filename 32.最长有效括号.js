/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

 var longestValidParentheses = function(s) {
    let stack = [-1];
    let max =0 ;
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(s[i] ==="(") stack.push(i);
        if(s[i] ===")"){
            stack.pop();
            if(stack.length === 0){
                stack.push(i);
            }else{
                max = Math.max(max,i- stack[stack.length-1]);
            }
        }
    }
    return max;
};


// var longestValidParentheses = function(s) {
//     function isValid(str,start,end){
//         if(str[start] === ')') return false;
//         let stack = [];
//         for(let i=start;i<=end;i++){
//             let chart =s[i];
//             if(chart === "("){
//                 stack.push(chart);
//             }else{
//                 if(stack.length ===0) return false;
//                  stack.pop();
//             }
//         }
//         if(stack.length === 0 )return true;
//     }
//     let max = 0;
//     let maxStr = "";
//     for(let i=0;i<s.length;i++){
//         for(let j=i+1;j<s.length;j++){
//             if(isValid(s,i,j)){
//                 max = Math.max(max,j -i + 1);
//             }
//         }
//     }
//     return max;
// };
// @lc code=end

