/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length-1; 
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] <target){
            start = mid+1;
        }else if(nums[mid] > target){
            end = mid -1;
        }else{
            return mid;
        }
    }
    return start;
};
// @lc code=end

