/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let res = []
   function preOrder(root){
    if(!root) return;
    res.push(root);
    preOrder(root.left);
    preOrder(root.right);
   }
   preOrder(root);
   console.log('res',res);
   for(let i=0;i<res.length-1;i++){
    let pre = res[i];
    let next = res[i+1];
    pre.left = null;
    pre.right = next;
   }
};
// @lc code=end

