/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let j = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !==0){
//             nums[j] = nums[i];
//             j++;
//         }
//     }
//     for(let i=j;i<nums.length;i++){
//         nums[i] = 0;
//     }
//     return nums;
// };

var moveZeroes = function(nums) {
    let j=0;

    function swap(i,j){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i] !==0){
            swap(i,j);
            j++;
        }
    }
    return nums;
};


// @lc code=end

