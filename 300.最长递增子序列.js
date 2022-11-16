/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */


/**
 * 这个解法会超时
 */
// var lengthOfLIS = function(nums) {
//     let res = [];
//     function dfs(nums,path,start){
//         if(start === nums.length){
//           res.push(path);
//           return ;
//         }
//         if(nums[start] > path[path.length-1]){
//             dfs(nums,[...path,nums[start]],start+1);// 每个大于的都可以选择加入，或者不加入
//             dfs(nums,[...path],start+1);
//         }else{
//             dfs(nums,[...path],start+1);
//         }
//     }
//     for(let i=0;i<nums.length;i++){
//         dfs(nums,[nums[i]],i+1);
//     }
//     let max = 0;
//     for(let i=0;i<res.length;i++){
//         max = Math.max(res[i].length,max);
//     }
//     return max;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    if(nums.length ===0) return 0;
    let dp = new Array(nums.length).fill(0);
    dp[0] = 1; //我们还是以下标0开始
    let res = 1;
    for(let i=1;i<nums.length;i++){
        dp[i] = 1;
        for(let j=0;j<i;j++){
            if(nums[i] > nums[j])
                dp[i] = Math.max(dp[j]+1,dp[i]);
        }
        res = Math.max(dp[i],res);
    }
    return res;
};


// @lc code=end

