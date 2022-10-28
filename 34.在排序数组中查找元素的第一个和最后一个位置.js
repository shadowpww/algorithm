/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length  === 0) return [-1,-1];
    

    function searchT(nums,target,has){
        let l = 0, r = nums.length-1;
        let res = -1;
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(nums[mid] === target){
                res = mid;
                if(has){
                    r = mid-1;
                }else{
                    l = mid+1
                }
            }else if( nums[mid]> target){
                r = mid-1;
            }else{
                l = mid+1;
            }
        }
        return res;
    }
    return [searchT(nums,target,true),searchT(nums,target,false)];
};
// @lc code=end

