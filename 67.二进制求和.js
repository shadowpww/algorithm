/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let jinwei = 0;
    let i = a.length-1;
    let j = b.length-1;
    let res = [];
    let isNull = (s)=>{
        return s === null || s === undefined;
    }
    while(!isNull(a[i]) && !isNull(b[j])){
       let cur = (+a[i] + +b[j]+ +jinwei)%2;
       jinwei = Math.floor((+a[i]+ +b[j]+ +jinwei)/2);
        res.unshift(cur);
        i--;
        j--;
    }
    console.log('res',res,jinwei);
    while(!isNull(a[i])){
        cur = (+a[i] + +jinwei)%2;
        jinwei = Math.floor((+a[i]+ +jinwei)/2);
        res.unshift(cur);
        i--;
    } 
    while(!isNull(b[j])){
        cur = (+b[j] + +jinwei)%2;
        jinwei = Math.floor((+b[j]+ +jinwei)/2);
        res.unshift(cur);
        j--;
    } 
    console.log('res',res,jinwei);
    if(jinwei > 0) res.unshift(+jinwei);
    return res.join('');
};
// @lc code=end

