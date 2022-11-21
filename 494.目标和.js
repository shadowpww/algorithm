/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var findTargetSumWays = function(nums, target) {
//     let res = [];
//     function dfs(nums,path,start,cur,target){
//         if(start === nums.length){
//             if(cur === target){
//                 res.push([...path]);
//             }
//             return ;
//         }
//         path.push('+');
//         dfs(nums,path,start+1,cur+nums[start],target);
//         path.pop();
//         dfs(nums,path,start+1,cur-nums[start],target);
//         path.pop();
//     }
//     dfs(nums,[],0,0,target);
//     return res.length;
// };

// var findTargetSumWays = function(nums, target) {
//     let count = 0;
//     const backtrack = (nums, target, index, sum) => {
//         if (index === nums.length) {
//             if (sum === target) {
//                 count++;
//             }
//         } else {
//             backtrack(nums, target, index + 1, sum + nums[index]);
//             backtrack(nums, target, index + 1, sum - nums[index]);
//         }
//     }
    
//     backtrack(nums, target, 0, 0);
//     return count;
// };


var findTargetSumWays = function(nums, target) {

    let sum = 0;
    for(let v of nums){
        sum += v;
    }
    let gap = sum - target;
    if(gap < 0 || gap % 2 !==0) return 0;   
    let n = nums.length;
    let neg =  gap/2;
    let dp = Array.from({length:n+1},()=>{
        return new Array(neg+1).fill(0);
    })

    dp[0][0] = 1;
    for(let i=1;i<=n;i++){
        for(let j=0;j<=neg;j++){
            const num = nums[i-1];
            if(num> j){
                dp[i][j] = dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][j] + dp[i-1][j-num];
            }
        }
    }
    return dp[n][neg];

};

// @lc code=end

