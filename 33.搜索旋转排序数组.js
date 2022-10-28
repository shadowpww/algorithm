/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    if(len ===0) return -1;
    if(len==1) return nums[0] === target ? 0 : -1;
    let l = 0, r = len-1;
    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] === target) return mid;
        if(nums[l] < nums[mid]){
            if(nums[mid] > target && nums[l] <= target){
                r = mid-1;
            }else{
                l = mid+1;
            }
        }else{
            if(nums[r] >= target && nums[mid+1] <= target ){
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
    }
    return -1;
};
// @lc code=end

