/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let length = nums.length;
    if(length === 0) return -1;
    if(length === 1) return nums[0];
    let i = 0 , j = 1;
    while(j<nums.length){
        if(nums[i] > nums[j]) return nums[j];
        i++;
        j++;
    }
    return nums[0];
};
// @lc code=end

