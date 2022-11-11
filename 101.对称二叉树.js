/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// var isSymmetric = function(root) {
//     function isMiror(left,right){
//         if(right && !left ||  !right && left) return false;
//         if(!right && !left) return true; 
//         const lval = left.val;
//         const rval = right.val;
//        if(lval === rval){
//             return isMiror(left.left,right.right) && isMiror(left.right,right.left);
//        }else{
//         return false
//        }
//     }
//     if(!root)return true;
//     return isMiror(root.left,root.right);
// };

var levelOrder = function(root) {
    if(!root) return [];
    let stack =[];
    let curArr = [];
    curArr.push(root);
    let res = [];
    while(stack.length>0 || curArr.length > 0){
        if(stack.length ===0){
            res.push(curArr.map(v=>{if(!v){return null}else{return v.val}}));
            stack = curArr;
            curArr = [];
        }   
        let cur = stack.shift();
       (cur &&  cur.left) ?  curArr.push(cur.left) : curArr.push(null);
       (cur && cur.right) ? curArr.push(cur.right) : curArr.push(null);
    }
    return res;
};

function check(arr){
    let i=0;let j= arr.length-1;
    while(i<j){
        if(arr[i] === arr[j]){
            i++;
            j--
        }else{
            return false;
        }
    }
    return true
}

var isSymmetric = function(root) {
    const level = levelOrder(root);
    for(let i=0;i<level.length;i++){
        console.log('i',level[i],check(level[i]));
        if(!check(level[i])){
            return false;
        }
    }
    return true;
};

// @lc code=end

