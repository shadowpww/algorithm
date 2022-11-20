/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function(nums) {
//     let sum = 0;
//     for(let v of nums){
//         sum +=v;
//     }
//     if(sum %2 ===1){
//         return false;
//     }
//     nums.sort((a,b)=>a-b);
//     function dfs(nums,cur,target,start){
//         if(start > nums.length){
//             return false;
//         }
//         if(cur > target){
//             return false;
//         }
//         if(cur === target){
//             return true;    
//         }
//         if(cur < target &&  start < nums.length-2 && cur +  nums[start+1] > target ) return false;
//        return  dfs(nums,cur+nums[start],target,start+1) || dfs(nums,cur,target,start+1); // 选或者不选当前元素
//     }
//    return  dfs(nums,0,sum/2,0);
// };
// var canPartition = function(nums) {
//     if(nums.length < 2) return false;
//     let sum = 0;
//     for(let v of nums){
//         sum +=v;
//     }
//     if(sum % 2 === 1)return false;
//     let target = sum/2;
//     let dp = Array.from({length:nums.length},()=>{
//         return new Array(target+1).fill(false);
//     })
//     dp[0][nums[0]] = true;
//     for(let i=0;i<nums.length;i++){
//         dp[i][0] = true;
//     }
//     for(let i=1;i<nums.length;i++){
//         const cur = nums[i];
//         for(let j=1;j<=target;j++){
//             if(j >= cur){
//                 dp[i][j] = dp[i-1][j] || dp[i-1][j - nums[i]]
//             }else{
//                 dp[i][j] = dp[i-1][j];
//             }
//         }
//     }
//     return dp[nums.length-1][target];
// };  
var canPartition = function(nums) {
    if(nums.length < 2) return false;
    let sum = 0;
    for(let v of nums){
        sum +=v;
    }
    if(sum % 2 === 1)return false;
    let target = sum/2;
    let dp =  new Array(target+1).fill(false);
    dp[0] = true;
    for(let i=0;i<nums.length;i++){
        const cur = nums[i];
        for(let j=target;j>=cur;j--){
            dp[j] =  dp[j] | dp[j - cur]
        }
    }
    return dp[target];
};  
// @lc code=end

