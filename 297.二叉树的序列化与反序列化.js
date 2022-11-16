/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const arr = []
     dfsSerialize(root,arr);
    console.log('arr',arr.join(','));
    return arr.join(',');
};


function dfsSerialize(root,arr){
    if(!root){
        return arr.push("None");
    }else{
        arr.push(root.val);
        lArr = dfsSerialize(root.left,arr);
        rArr = dfsSerialize(root.right,arr);
    }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data[0] === 'None'){
        data.shift();
        return null;
    }
    const root = new TreeNode()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

