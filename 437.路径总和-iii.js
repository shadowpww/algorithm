/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */

function rootSum(root,targetSum){
    let res= 0;
    if(!root){
        return 0;
    }
    if(root.val === targetSum) res++;
    res += rootSum(root.left,targetSum-root.val);
    res += rootSum(root.right,targetSum-root.val);
    return res;
}

var pathSum = function(root, targetSum) {
    if(!root){
        return 0;
    }
    let res = 0;
    res =  rootSum(root,targetSum);
    res += pathSum(root.left,targetSum);
    res += pathSum(root.right,targetSum);
    return res;
};
// @lc code=end

