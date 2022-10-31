/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    function getNumber(str){
        return str.charCodeAt(0);
    } 
    let map = new Array(26).fill(0);
    let res  = {};
    const numberA  = getNumber('a');
    for(let i=0;i<strs.length;i++){
        for(let j=0;j<strs[i].length;j++){
            map[getNumber(strs[i][j])  - numberA] +=1;
        }
        let tmp = "";
        map.forEach((v,idx)=>{
            tmp += `${v}:${idx}`;
        })
        if(res[tmp]){
            res[tmp].push(strs[i]);
        }else{
            res[tmp] = [strs[i]];
        }
        map = new Array(26).fill(0);
    }
    return Object.keys(res).map((v)=>{
        return res[v];
    })
};
// @lc code=end

