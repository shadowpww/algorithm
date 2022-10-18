/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j <= nums.length - 1; j++) {
//       if (nums[i] + nums[j] === target) result = [i, j];
//     }
//   }
//   return result;
// };
var twoSum = function (nums, target) {
  const map = new Map();
  for(let i=0;i<nums.length;i++){
    if(map.has(target - nums[i])){
      return [map.get(target-nums[i]),i];
    }else{
      map.set(nums[i],i);
    }
  }
};
// @lc code=end
