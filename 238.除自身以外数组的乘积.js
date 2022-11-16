/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     let beforeDp = new  Array(nums.length).fill(0);
//     let afterDp = new Array(nums.length).fill(0);
//     beforeDp[0] = nums[0];
//     afterDp[nums.length-1] = nums[nums.length-1];
//     for(let i=1;i<nums.length;i++){
//         beforeDp[i] = nums[i] * beforeDp[i-1];
//     }
//     for(let i=nums.length-2;i>=0;i--){
//         afterDp[i] = nums[i] * afterDp[i+1];
//     }
//     let ans = [];
//     for(let i=0;i<nums.length;i++){
//         if(i === 0){
//             ans[i] = afterDp[1];
//         }else if(i==nums.length-1){
//             ans[i] = beforeDp[i-1];
//         }else{
//             ans[i] = beforeDp[i-1] * afterDp[i+1];
//         }
//     }
//     return ans;
// };

var productExceptSelf = function(nums) {
    let L = new  Array(nums.length).fill(0); // dp[i] 标识第i个元素所有左边数字的乘积
    L[0] = 1;
    for(let i=1;i<nums.length;i++){
        L[i] = nums[i-1] * L[i-1];
    }
    let ans = [];
    let R = 1;
    for(let i=nums.length-1;i>=0;i--){
        ans[i] = R * L[i];
        R *= nums[i];
    }
    return ans;
};

// @lc code=end

