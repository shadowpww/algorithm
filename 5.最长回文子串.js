/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let len =s.length;
    const dp = Array.from({length:len},()=> new Array(len).fill(false));
    for(let i=0;i<len;i++){
        dp[i][i] = true; // 每个长度的字符，都是一个回文字符串
    }
    let max =1;
    let start = 0;
    for(let gap=2;gap<=len;gap++){
        for(let i=0;i<len;i++){
            const j = i + gap -1;
            if(s[i] != s[j]){
                dp[i][j] = false;
            }else{
                if(j-i < 3){
                    dp[i][j] = true
                }else{
                    dp[i][j] = dp[i+1][j-1];
                }
                if(dp[i][j] && j-i+1 > max){
                    max = j-i+1;
                    start = i ;
                }
            }
        }
    }
    return s.slice(start,max +start);
};
// var longestPalindrome = function(s) {
//     if(s.length <1) return "";
//     if(s.length ===1) return s[0];
//     const len = s.length;
//     let max = 0;
//     let res = [0,0];
//     for(let i=0;i<=2*len-1;i++){
//         let left =  Math.floor((i-1)/2);
//         let right = Math.ceil((i+1)/2);
//         while(left>=0 && right <= len){
//             let leftC = s[left];
//             let rightC = s[right];
//             if(leftC == rightC){
//                 let cur = right-left +1;
//                 if(cur > max){
//                     max = cur;
//                     res = [left,right];
//                 }
//                 left--;
//                 right++;
//             }else{
//                 break;
//             }
//         }
//     }
//     return s.slice(res[0],res[1]+1);
// };
// @lc code=end

