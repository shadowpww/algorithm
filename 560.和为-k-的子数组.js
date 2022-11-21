/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//     // let dp = Array.from({length:nums},()=>{
//     //     return new Array(k).fill(false);
//     // });
//     let count =0;
//     for(let i=0;i<nums.length;i++){
//         let sum = 0;
//         for(let j=i;j<nums.length;j++){
//             sum +=nums[j];
//             if(sum  === k){
//                 count++;
//             }
//         }
//     }
//     return count;
// };

var subarraySum = function(nums, k) {
    let count =0;
    let map = new Map();
    map.set(0,1);
    let sum =0;
    for(let v of nums){
        sum += v;
        if(map.has(sum - k)){
            count  += map.get((sum-k));
        }
        if(map.has(sum)){
            map.set(sum,map.get(sum)+1);
        }else{
            map.set(sum,1);
        }
    }
    return count;
};
// @lc code=end

