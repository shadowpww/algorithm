/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { 
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let dp = [];
    dp[0] = nums[0];
    let max = dp[0];
   // let res = Array.from(Array(nums.length), () => new Array(nums.length))
    //   for(let i=0;i<=nums.length-1;i++){
        // res[i][i] = nums[i];
       // max = Math.max(nums[i],max);
    // }
    // for(let i=0;i<=nums.length-2;i++){
    //     for(let j=i+1;j<=nums.length-1;j++){
    //         res[i][j] = res[i][j-1] + nums[j];
    //         max = Math.max(res[i][j],max);
    //     }
    // }
   for(let i =1;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i]);
        max = Math.max(dp[i],max);
   }
    return max;
};


// @lc code=end

