/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    function dfs(nums,depth,combines,start){
        if(depth === nums.length){
            res.push(combines);
            return ;
        }
        for(let i=start;i<nums.length;i++){
            combines.push(nums[i]);
            dfs(nums,depth+1,[...combines],i+1);
            combines.pop();
            dfs(nums,depth+1,[...combines],i+1);
        }
    }
    dfs(nums,0,[],0);
 return res;
};
// @lc code=end

