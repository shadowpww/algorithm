/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function midDsf(root){
        let res = [];
        let stack = [];
        stack.push(root);
        while(stack.length>0){
            let cur = stack.pop();
            if(cur instanceof TreeNode){
                stack.push(cur.right,cur.val,cur.left);
            }else if(typeof cur === 'number'){
                res.push(cur);
            }
        }
        return res;
    }
    let flag = true;
    let arr = midDsf(root);
    let pre = arr[0];
    for(let i=1;i<arr.length;i++){
        if(pre < arr[i]){
            pre = arr[i]
        }else{
            flag= false;
            break;
        }
    }
    return flag
};


// var isValidBST = function(root) {
//     function isValid(root,min,max){
//         if(!root) return true;
//         const cur = root.val;
//         if(cur > min && cur < max){
//             return isValid(root.left,min,cur) && isValid(root.right,cur,max);
//         }else{
//             return false
//         }
//     }
//     return isValid(root,-Number.MAX_VALUE,Number.MAX_VALUE);
// }

// @lc code=end

