/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if(s.length ==1) return 1;
    let len = s.length;
    let dp = Array.from({length:len},()=>{
        return new Array(len).fill(false);
    })
    let count =0;

    for(let i=len-1;i>=0;i--){
        for(let j=i;j<len;j++){
            if(s[i] === s[j]){
                if(j-i <=1){
                    dp[i][j] = true;
                }else if(j-i>1){
                    dp[i][j] = dp[i+1][j-1];
                }
            }
            if(dp[i][j]){
                count++;
            }
            // if(i-j ===1){
            //     dp[i][j] = s[i] === s[j];
            // }else if(i-j > 1){
            //     dp[i][j] = dp[i+1][j-1]  &&s[i] === s[j];
            // }else if(i==j){
            //     dp[i][j] =true;
            // }
            // if(dp[i][j]){
            //     count++;
            // }
        }
    }
    return count;
};
// @lc code=end

