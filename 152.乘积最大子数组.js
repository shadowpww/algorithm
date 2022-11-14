/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     if(nums.length ===0) return 0;
//     if(nums.length ===1) return nums[0];
//     let dpMin = new Array(nums.length+1);
//     let dpMax = new Array(nums.length+1);
//     let max = nums[0];
//     dpMax[0] = nums[0],dpMin[0] = nums[0];
//     for(let i=1;i<nums.length;i++){
//         let curMin = nums[i] * dpMin[i-1];
//         let curMax = nums[i] * dpMax[i-1];
//         dpMin[i] = Math.min(curMin,curMax,nums[i]);
//         dpMax[i] = Math.max(curMin,curMax,nums[i]);
//         max = Math.max(dpMax[i],max);
//     }
//     return max;
// };

var maxProduct = function(nums) {
    if(nums.length ===0) return 0;
    if(nums.length ===1) return nums[0];
    let dpMin = nums[0];
    let dpMax =  nums[0];
    let max = nums[0];
    for(let i=1;i<nums.length;i++){
        let curMin = nums[i] * dpMin;
        let curMax = nums[i] * dpMax;
        dpMin = Math.min(curMin,curMax,nums[i]);
        dpMax = Math.max(curMin,curMax,nums[i]);
        max = Math.max(dpMax,max);
    }
    return max;
};

// @lc code=end

