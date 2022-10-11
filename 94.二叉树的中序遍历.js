/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = [];
    let res = [];
    let cur = root;
    while(cur !==null || stack.length!==0){
        if(cur!== null){
            stack.push(cur);
            cur = cur.left;
        }else{
            cur = stack.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return res;
}
// @lc code=end

