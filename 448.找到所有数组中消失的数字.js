/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i=0;i<nums.length;i++){
        let tmp = Math.abs(nums[i]);
        if(nums[tmp-1] > 0){
            nums[tmp-1] = -nums[tmp-1];
        }else{
            continue;
        }
    }
    let res = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res.push(i+1);
        }
    }
    return res;
};
// @lc code=end

