/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {    
    quickSort(nums,0,nums.length-1);
    return nums;
};


function swap(nums,a,b){
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp
}


function partion(nums,left,right){
    let sentry = nums[left];
    while(left < right){
        while(left < right && nums[right] >= sentry) right--;
        nums[left] = nums[right];
        while(left< right && nums[left] <= sentry) left++;
        nums[right] = nums[left];
    }
    nums[left] = sentry;
    return left;
}

function quickSort(nums,left,right){
    if(left >= right){
        return ;
    }
    const random =  Math.floor(Math.random()*(right-left+1)) + left; 
    swap(nums,random,left);
    let sortIdx = partion(nums,left,right);
    quickSort(nums,0,sortIdx-1);
    quickSort(nums,sortIdx+1,right);
}

// @lc code=end

