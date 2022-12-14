/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1)return nums[0];
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let max = dp[0];
    for(let i=1;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i]);
        max = Math.max(dp[i],max);
    }
    return max;
};
// @lc code=end

