/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     if(nums.length <=1) return true;
//     let visited = new Array(nums.length).fill(false);
//     visited[0] =true;
//     for(let i=0;i<nums.length;i++){
//         const number = nums[i];
//         if(!visited[i]) continue;
//         if(visited[i]){
//             let j=0;
//             while(j<=number){
//                 visited[i+j] = true;
//                 if(visited[nums.length-1]) return true;
//                 j++;
//             }
//         }
//     }
//     return visited[nums.length-1];
// };

var canJump = function(nums) {
    let maxLenth = 0;
    for(let i=0;i<nums.length;i++){
        if(i>maxLenth) return false;
        maxLenth = Math.max(maxLenth,i+nums[i]);
        if(maxLenth >=nums.length-1)return true;
    }
    return false;
};
// @lc code=end

