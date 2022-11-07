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


// var inorderTraversal = function(root) {
//     let res = [];
//     function dfs(node){
//         if(!node) return ;
//         if(node.left) dfs(node.left);
//         res.push(node.val);
//         if(node.right) dfs(node.right);
//     }
//     dfs(root);
//     return res;
// }

var inorderTraversal = function(root) {
    let stack = [];
    let res = [];
    stack.push(root);
    while(stack.length > 0){
        let cur = stack.pop();
        if(cur instanceof TreeNode){
            stack.push(cur.right,cur.val,cur.left);
        }else if(typeof cur ===  'number'){
            res.push(cur);
        }
    }
    return res;
}

// @lc code=end

