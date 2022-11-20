/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sArr = new Array(26).fill(0);
    let pArr = new Array(26).fill(0);
    let res = [];
    let pLen = p.length;
    let sLen = s.length;
    if(sLen < pLen) return res;


    for(let i=0;i<p.length;i++){
        sArr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        pArr[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    if(sArr.toString() === pArr.toString()){
        res.push(0);
    }

    for(let i=pLen;i<s.length;i++){
        --sArr[s[i-pLen].charCodeAt(0) - 'a'.charCodeAt(0)];
        ++sArr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
        if(sArr.toString() === pArr.toString()){
            res.push(i-pLen+1);
        }
    }
    return res;
};
// @lc code=end

