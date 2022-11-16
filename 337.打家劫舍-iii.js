/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 这个解法会超时
// var rob = function(root) {
//     function dfs(root,flag,res){
//         if(!root) return res;
//         if(flag){
//             let choose = res + root.val+ dfs(root.left,false,0) + dfs(root.right,false,0);
//             let notChoose =res + dfs(root.left,true,0) + dfs(root.right,true,0);
//             return res + Math.max(choose,notChoose);
//         }else{
//          let leftVal =  dfs(root.left,true,0);
//          let rightVal = res + dfs(root.right,true,0);
//          return res + leftVal + rightVal;
//         }
//     }
//     return Math.max(dfs(root,true,0),dfs(root,false,0));
// };

var rob = function(root) {
    const choose = new Map();
    const not = new Map();
    function dfs(root){
        if(!root) return null;
        dfs(root.left);
        dfs(root.right);
        choose.set(root,root.val + (not.get(root.left) || 0) + (not.get(root.right)||0));
        not.set(root,Math.max(choose.get(root.left)||0,not.get(root.left)||0) + Math.max(not.get(root.right)||0,choose.get(root.right)||0))
    }
    dfs(root);
    return Math.max(choose.get(root)||0,not.get(root)||0);
};

// @lc code=end

