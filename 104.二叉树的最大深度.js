/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
// var maxDepth = function(root) {

//     function depth(root){
//         if(!root) return 0;
//         return 1+ Math.max(depth(root.left),depth(root.right));
//     }
//     return depth(root);
// };
var maxDepth = function(root) {
    //使用层序遍历的方式
    var levelOrder = function(root) {
        if(!root) return 0;
        let stack =[];
        let curArr = [];
        let depth = 0;
        curArr.push(root);
        while(stack.length>0 || curArr.length > 0){
            if(stack.length ===0){
                stack = curArr;
                curArr = [];
                depth++;
            }   
            let cur = stack.shift();
            cur.left &&  curArr.push(cur.left);
            cur.right && curArr.push(cur.right);
        }
        return depth;
    };
    return levelOrder(root);
};
// @lc code=end

