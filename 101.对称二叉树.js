/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
function isMirror(left,right){
    if(!left && !right) return true;
    if((!left && right )|| (left && !right))return false;
    if(left.val !== right.val) return false;
    return isMirror(left.left,right.right) && isMirror(left.right,right.left);
}   
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return false;
    return isMirror(root.left,root.right);
};
// @lc code=end

