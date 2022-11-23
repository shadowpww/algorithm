/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if(nums.length <= 1) return 0;
    let left = -1;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] >= nums[i+1]){
            left  = i;
        }
    }
    let right = nums.length;
    for(let j=nums.length-1;j>=1;j--){
        if(nums[j] <= nums[j-1]){
            right = j;
            break;
        }
    }
    if(left === -1 || right === nums.length ) return 0;
    return right - left +1;

};
// @lc code=end

