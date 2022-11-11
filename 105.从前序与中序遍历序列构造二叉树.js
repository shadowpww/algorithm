/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length  === 0) return null;
    let idx = inorder.indexOf(preorder[0]);

    let root =  new TreeNode(preorder[0]);
    const preleftArr = preorder.slice(1,idx+1);
    const inorderLeftArr = inorder.slice(0,idx);
    const preRightArr = preorder.slice(idx+1);
    const inorderRightArr = inorder.slice(idx+1);
    root.left = buildTree(preleftArr,inorderLeftArr) || null;
    root.right = buildTree(preRightArr,inorderRightArr) || null;
    return root;
};
// @lc code=end

