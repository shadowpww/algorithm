/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let length = nums.length;
    let res = [];
    let used = [];
    nums.sort((a,b)=>a-b);
    function dfs(path,nums,depth,used){
        if(depth === length){
            res.push(path);
            return;
        }

        for(let i = 0; i < length;i++){
            if(used[i] || (i>0 && nums[i] === nums[i-1] && !used[i-1] )){
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            dfs([...path],nums,depth+1,used);
            path.pop();
            used[i] = false;
        }
    }
    dfs([],nums,0,used);
    return res;
};
// @lc code=end

