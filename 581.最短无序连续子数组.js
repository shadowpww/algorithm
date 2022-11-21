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
    let right = -1;
    let maxN = -Number.MAX_VALUE;
    let minN = Number.MAX_VALUE;
    for(let i=0;i<nums.length;i++){
        if(maxN > nums[i]){
            right  = i;
        }else{
            maxN = nums[i];
        }
    }

    for(let j=nums.length-1;j>=0;j--){
        if(nums[j] > minN){
            left = j;
        }else{
            minN = nums[j];
        }
    }
    if(right === -1) return 0;
    return right - left +1;

};
// @lc code=end

