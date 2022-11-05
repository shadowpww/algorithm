/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     function quickSort(nums,left,right){
//         let partitionIdx;
//         if(left < right){
//             partitionIdx =  partition(nums,left,right);
//             quickSort(nums,0,partitionIdx-1);
//             quickSort(nums,partitionIdx+1,right);
//         }
//     }
    
//     function partition(nums,left,right){
//         let pivot = nums[left];
//         while(left < right){
//             while(right> left && nums[right] > pivot) right--;
//             nums[left] = nums[right];
//             while(left< right && nums[left] <= pivot ) left++;
//             nums[right] = nums[left];
//         }
//         nums[left] = pivot;
//         return left;
//     }
    

//     return quickSort(nums,0,nums.length-1);
// };

var sortColors = function(nums) {
    if(nums.length <=1)return nums;

    let left = 0;
    let right = nums.length -1;

    for(let i=0;i<=right && left <= right;){
        if(nums[i] === 0){
            swap(nums,i,left);
            left++;
            i++;
        }else if(nums[i]=== 2){
            swap(nums,i,right);
            right--;
        }else{
            i++;
        }
    }

    function swap(nums,a,b){
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
    }
    return nums;
};
// @lc code=end




