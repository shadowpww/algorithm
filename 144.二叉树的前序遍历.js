/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function(root) {
//     let stack = [];
//     let res = [];
//     if(!root){
//         return []
//     }
//     stack.push(root);
//     while(stack.length !==0){
//         let cur = stack.shift();
//         res.push(cur.val);
//         cur.right  && stack.unshift(cur.right);
//         cur.left  && stack.unshift(cur.left);
//     }
//     return res;

//     // if(!root){
//     //     return [];
//     // }
//     // let res = [];
//     // res.push(root.val);
//     // root.left && (res = res.concat(preorderTraversal(root.left)));
//     // root.right && (res = res.concat(preorderTraversal(root.right)));
//     // return res;
// };

var preorderTraversal = function(root) {
    let stack =[];
    let res = [];
    stack.push(root);
    while(stack.length>0){
        let cur = stack.pop();
        if(cur === null) continue;
        if(cur instanceof TreeNode){
            stack.push(cur.right,cur.left,cur.val);
        }else if(typeof cur === 'number'){
            res.push(cur);
        }
    }
    return res;
}
// @lc code=end

