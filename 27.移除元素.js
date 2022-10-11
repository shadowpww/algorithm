/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let endIdx = 0;
    for(let i =0;i<=nums.length-1;i++){
        if(nums[i] == val){
            continue;
        }else{
            nums[endIdx] = nums[i];
            endIdx++;
        }
    }
    return endIdx 
};
// @lc code=end

