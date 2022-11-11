/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     if(!root) return [];
//     let stack =[];
//     let curArr = [];
//     curArr.push(root);
//     let res = [];
//     while(stack.length>0 || curArr.length > 0){
//         if(stack.length ===0){
//             res.push(curArr.map(v=>  v.val));
//             stack = curArr;
//             curArr = [];
//         }   
//         let cur = stack.shift();
//         cur.left &&  curArr.push(cur.left);
//         cur.right && curArr.push(cur.right);
//     }
//     return res;
// };

var levelOrder = function(root) {
    if(!root) return [];
    let stack =[];
    stack.push(root);
    let res = [];
    while(stack.length>0){
        let n = stack.length;
        let cur = [];
        for(let i=0;i<n;i++){
            let node = stack.shift();
            cur.push(node.val);
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        res.push(cur);
    }
    return res;
};
// @lc code=end

