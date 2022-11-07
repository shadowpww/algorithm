/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    let stack = [];
    let res = [];
    stack.push(root);
    while(stack.length >0){
        let cur = stack.pop();
        if(!cur) continue;
        if(cur instanceof TreeNode){
            stack.push(cur.val,cur.right,cur.left);
        }else if(typeof cur === 'number'){
            res.push(cur);
        }
    }
    return res;
};
// @lc code=end

