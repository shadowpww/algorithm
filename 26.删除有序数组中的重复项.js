/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) return nums.length;
    let endIdx = 0;
    for(let i = 1;i<=nums.length-1;i++){
        if(nums[i] === nums[endIdx]){
            continue;
        }else{
            endIdx++;
            nums[endIdx] = nums[i];
        }
    }
    return endIdx+1;
};
// @lc code=end

