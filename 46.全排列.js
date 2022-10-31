/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//     let length = nums.length;
//     let res = [];
//     let used = [];
//     function dfs(path,nums,depth,used){
//         if(depth === length){
//             res.push(path);
//             return;
//         }

//         for(let i = 0; i < length;i++){
//             if(!used[i]){
//                 path.push(nums[i]);
//                 used[i] = true;
//                 dfs([...path],nums,depth+1,used);
//                 path.pop();
//                 used[i] = false;
//             }
//         }
//     }
//     dfs([],nums,0,used);
//     return res;
// };

var permute = function(nums) {
    let length = nums.length;
    let res = [];
    let used = [];
    function dfs(path,nums,depth,used){
        if(depth === length){
            res.push(path);
            return;
        }

        for(let i = 0; i < length;i++){
            if(!used[i]){
                path.push(nums[i]);
                used[i] = true;
                dfs([...path],nums,depth+1,used);
                path.pop();
                used[i] = false;
            }
        }
    }
    dfs([],nums,0,used);
    return res;
};


// @lc code=end

