/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let len = height.length;
    let left = 0;
    let right = len-1;
    let max = -1;
    while(right>left){
        let gap = right-left;
        max = Math.max(gap* Math.min(height[left],height[right]),max);
        height[right] >= height[left] ? left++ : right--
    }
    return max;
};

// 暴力解法，会超时。
// var maxArea = function(height) {
//     let len = height.length;
//     let max = 0;
//     for(let i=0;i<len;i++){
//         let start = height[i];
//         for(let j=len-1;j>i;j--){
//             let end = height[j];
//             let gap = j- i;
//             max = Math.max(gap* Math.min(start,end),max);
//         }
//     } 
//     return max
// };
// @lc code=end

