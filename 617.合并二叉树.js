/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    let newRoot = new TreeNode(null);
    if(root1 && root2){
        newRoot.val = root1.val + root2.val;
        newRoot.left = mergeTrees(root1.left,root2.left);
        newRoot.right = mergeTrees(root1.right,root2.right);
        return newRoot;
    }
    if(!root1 && !root2){
        return null;
    }
    if(!root2){
        newRoot.val = root1.val;
    }
    if(!root1){
        newRoot.val = root2.val;
    }
    newRoot.left = mergeTrees(root1 ? root1.left : null,root2 ? root2.left: null);
    newRoot.right = mergeTrees(root1 ? root1.right : null,root2 ? root2.right:null);
    return newRoot;
};
// @lc code=end

