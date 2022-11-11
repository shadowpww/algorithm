/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var map = new Set();
    for(let i=0;i<nums.length;i++){
        map.add(nums[i]);
    }
    let max = 0;
    for(let i=0;i<nums.length;i++){
        let curNum  = nums[i];
        if(!map.has(curNum-1)){
            let j  = curNum;
            let len = 1;
            while(map.has(j+1)){
                j++;
                len++;
            }
            max = Math.max(len,max);
        }
    }
    return max;
};
// @lc code=end

