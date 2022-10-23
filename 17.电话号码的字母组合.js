/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    var StrMap = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }
    let res = [];

    function findCombination(digits,index,curStr){
        if(index === digits.length){
            res.push(curStr);
            return;
        }
        let curMap  = StrMap[digits[index]];
        for(let i=0;i<curMap.length;i++){
            findCombination(digits,index+1,curStr+curMap[i]);
        }
    }

    findCombination(digits,0,'');
    return res;
};



// var letterCombinations = function(digits) {
//     if(digits.length === 0) return [];
//     var StrMap = {
//         2:['a','b','c'],
//         3:['d','e','f'],
//         4:['g','h','i'],
//         5:['j','k','l'],
//         6:['m','n','o'],
//         7:['p','q','r','s'],
//         8:['t','u','v'],
//         9:['w','x','y','z']
//     }
//     let res = [];
//     for(let i=0;i<digits.length;i++){
//         let cur = digits[i];
//         if(res.length === 0){
//             res.push(...StrMap[cur]);
//         }else{
//             let tmp = [];
//             res = res.forEach((v)=>{
//                 for(let j=0;j<StrMap[cur].length;j++){
//                     let  s =  v + StrMap[cur][j];
//                     tmp.push(s);
//                 }
//             })
//             res = tmp;
//         }
//     }
//     return res;
// };
// @lc code=end

