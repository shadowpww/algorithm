/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 构建一个 i-> nums[i] 的图。由于存在重复数，那么这个图一定有环
// 然后快慢指针
var findDuplicate = function(nums) {
    let slow = 0,fast = 0;
    do{
        fast = nums[nums[fast]];
        slow = nums[slow];
    }while(slow !==fast)
    
    slow = 0;
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

// @lc code=end

