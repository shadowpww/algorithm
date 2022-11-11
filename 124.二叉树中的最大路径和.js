/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
    let max = -Number.MAX_VALUE;
    function dfs(root){
        if(!root) return 0;
        let leftNum =  Math.max(dfs(root.left),0);
        let rightNum =  Math.max(dfs(root.right),0)
        let res =leftNum + rightNum + root.val;
        max =Math.max(res,max);
        return  root.val+Math.max(rightNum,leftNum);
    }
    dfs(root);
    return max;
};
// @lc code=end

