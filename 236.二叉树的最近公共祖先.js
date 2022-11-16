/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {

//     function dfs(root,target,path,res){
//         path.push(root);
//         if(root.val === target.val){
//             res.push(...path);
//             return [...path];
//         }
//         if(root.left){
//             path.push(root.left);
//             dfs(root.left,target,path,res);
//             path.pop();
//         }
//         if(root.right){
//             path.push(root.right);
//             dfs(root.right,target,path,res);
//             path.pop();
//         }
//         path.pop();
//     }
//     let pPath = [];
//      dfs(root,p,[],pPath);
//     let qPath = [];
//     dfs(root,q,[],qPath);
//     let ans = null;
//     for(let i=0;i<pPath.length && i<qPath.length;i++){
//         if(pPath[i] === qPath[i]){
//             ans = pPath[i];
//         }
//     }
//     return ans;
// };

var lowestCommonAncestor = function(root, p, q) {
    let visited = [];
    let map = new Map();
    // 通过遍历整棵树，来记录下子节点到父节点的映射
    function dfs(root){
        if(root.left){
            map.set(root.left.val,root);
            dfs(root.left);
        }
        if(root.right){
            map.set(root.right.val,root);
            dfs(root.right);
        }
    }
    dfs(root);
    let findP = p;
    while(findP){
        visited[findP.val] = true;
        //依次访问父节点
        findP =  map.get(findP.val);
     
    }
    let findQ = q;
    while(findQ){
        if(visited[findQ.val]){
            return findQ;
        }
        findQ = map.get(findQ.val);
    }
    return null;
};

// @lc code=end

