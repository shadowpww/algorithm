/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// var hammingDistance = function(x, y) {
//     function getBitString(num){
//         let str = "";
//         while(num > 1){
//             let mod = num%2;
//             str = mod + str;
//             num =  num>>1;
//         }
//         return num + str;
//     }
//    let xStr =  getBitString(x);
//    let yStr = getBitString(y);
//    let lenX =xStr.length;
//    let lenY = yStr.length;
//    if(lenX > lenY){
//       yStr =  yStr.padStart(lenX,"0");
//    }else{
//      xStr = xStr.padStart(lenY,"0");
//    }
//    let res = 0;
//    for(let i=0;i<xStr.length;i++){
//         if(xStr[i] !== yStr[i]){
//             res++;
//         }
//    }
//    return res;
// };

var hammingDistance = function(x, y) {
    let s = x ^ y;
    let res = 0;
    while(s){
        res += s&1;
        s= s>>1;
    }
    return res;
};

// @lc code=end

