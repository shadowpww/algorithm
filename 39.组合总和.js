/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {
//     let res = [];
//     function dfs(combines,target,idx){
//         if(idx === candidates.length){
//             return ;
//         }
//         if(target ===0){
//             res.push(combines);
//             return;
//         }
//         dfs(combines,target,idx+1);
//         if(target - candidates[idx] >= 0 ){
//             dfs([...combines,candidates[idx]],target-candidates[idx],idx);
//         }
//     }
//     dfs([],target,0);
//     return res;
// };
var combinationSum = function(candidates, target) {
   let res = [];
   function dfs(candidates,path,target,sum,idx){
    if(target === sum){
        res.push(path);
        return;
    }
    if(sum > target){
        return;
    }

    for(let i=idx;i<candidates.length;i++){
        path.push(candidates[i]);
        sum += candidates[i];
        dfs(candidates,[...path],target,sum,i);
        path.pop();
        sum -= candidates[i];
    }
   }
   dfs(candidates,[],target,0,0);
   return res;
};

// @lc code=end

