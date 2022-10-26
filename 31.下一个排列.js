/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length <=1) return nums;
    let length = nums.length;
    let i = length-2;
    while(i>=0){
        if(nums[i] >= nums[i+1]){
            i--;
        }else{
            break;
        }
    }
    if(i>=0){
        let j = length -1;
        while(j>=0 && nums[j] <= nums[i]) j--;
        swap(nums,i,j);
    }
    reverse(nums,i+1);

    function swap(nums,i,j){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    function reverse(nums,start){
        let left = start;
        let right = nums.length-1;
        while(right > left){
            swap(nums,left,right);
            left++;
            right--;
        }
    }
};
// @lc code=end

