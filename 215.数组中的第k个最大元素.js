/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 function swap(nums,a,b){
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp
}


function partion(nums,left,right,k){
    let sentry = nums[left];
    let low = left;
    let high = right;
    while(left < right){
        while(left < right && nums[right] >= sentry) right--;
        nums[left] = nums[right];
        while(left< right && nums[left] <= sentry) left++;
        nums[right] = nums[left];
    }
    nums[left] = sentry;
    if(left < k){
        quickSort(nums,left+1,high,k);
    }
    if(left > k){
        quickSort(nums,low,left-1,k);
    }
}

function quickSort(nums,left,right,k){
    if(left >= right){
        return ;
    }
    const random =  Math.floor(Math.random()*(right-left+1)) + left; 
    swap(nums,random,left);
    partion(nums,left,right,k);
}


var findKthLargest = function(nums, k) {
   quickSort(nums,0,nums.length-1,nums.length-k);
   return nums[nums.length-k];
};
// @lc code=end

