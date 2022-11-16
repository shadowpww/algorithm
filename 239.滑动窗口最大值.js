/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let queue = [];
    for(let i=0;i<k;i++){
        while(queue.length>0 && nums[i] > nums[queue[queue.length-1]]){
            queue.pop();
        }
        queue.push(nums[i]);
    }

    let ans = [];
    for(let i=k;k<nums.length;i++){
        while(queue.length>0 && nums[i] > nums[queue[queue.length-1]]){
            queue.pop();
        }
        queue.push(nums[i]);
        while(queue[0] <= i-k){
            queue.shift();
        }
        ans.push(nums[queue[0]]);
    }
    return ans;
};