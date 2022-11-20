/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    // 统计每个字符出现的次数
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }else{
            map.set(nums[i],map.get(nums[i])+1);
        }
    }
    let maxtimes = -1;
    for(let [key,count] of map){
        if(count > maxtimes){
            maxtimes = count;
        }
    }
    let res= [];
    while(k>0){
        for(let [key,count] of map){
            if(count == maxtimes){
                res.push(key);
                k--;
            }
        }
        maxtimes--;
    }
    return res;
}; 
// @lc code=end

