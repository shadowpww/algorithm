/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function(temperatures) {
//     let ans = new Array(temperatures.length).fill(0);
//     for(let i=0;i<temperatures.length;i++){
//         for(let j=i+1;j<temperatures.length;j++){
//             if(temperatures[j] > temperatures[i]){
//                 ans[i] = j-i;
//                 break;
//             }
//         }
//     }
//     return ans;
// };

// 单调栈的解法
var dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0);
    let stack = [];
    for(let i=0;i<temperatures.length;i++){
        if(stack.length ===0){
            stack.push(i);
        }else{
            while(stack.length>0 && temperatures[i] > temperatures[stack[stack.length-1]]){
                // let top = stack[stack.length-1];
                // if(temperatures[i] > temperatures[top]){
                let idx =  stack.pop();
                ans[idx] =  i-idx;
                // }else{
                //     break;
                // }
            }
            stack.push(i);
        }
    }
    return ans;
};
// @lc code=end

