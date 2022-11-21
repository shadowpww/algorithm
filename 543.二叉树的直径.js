/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let res = 1;
    function dfs(root){
        if(!root) return 0;
        if(!root.left && !root.right) return 1;
        let L = dfs(root.left);
        let R = dfs(root.right); 
        res = Math.max(res,L+R+1);
        return 1+ Math.max(L,R);
    }
    dfs(root);
    return res  -1;
};  
// @lc code=end

