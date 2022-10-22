/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    if(!nums || nums.length <=2)return res;
    let length = nums.length;
    nums = nums.sort((a,b)=>a-b);
    for(let first =0;first < length-2;first++){
        if(first > 0 && nums[first] == nums[first-1]) {continue;} // 重复的选项需要跳过
        let second = first +1;
        let third = length-1;
        while(second < third){
            if(nums[first]* nums[third] > 0) break;
            if(nums[first] + nums[second] + nums[third] === 0){
                res.push([nums[first],nums[second],nums[third]]);
                second++;
                third--;
                while(second < third && nums[second] === nums[second-1]) second++;
                while(second< third && nums[third] === nums[third+1]) third--;
            }else if(nums[first] + nums[second] + nums[third] < 0){
                second++
            }else{
                third--;
            }
        }

     
    } 
    return res;
};


// @lc code=end

