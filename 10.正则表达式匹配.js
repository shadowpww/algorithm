/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function match(s,p,i,j){
    if(i ===0) return false;
    if(p[j-1] === '.') return true;
    if(s[i-1] == p[j-1]){
        return true;
    }
    return false
}

var isMatch = function(s, p) {
    let  m = s.length ;
    let  n = p.length;
    let dp = Array.from(new Array(m+1), () => new Array(n+1).fill(false))
    dp[0][0] = true;
    for(let i=0;i<=m;i++){
        for(let j=1;j<=n;j++){
            let reg = p[j-1];
            if(reg !== "*"){
               if(match(s,p,i,j)){
                dp[i][j] = dp[i-1][j-1];
               }else{
                dp[i][j] = false;
               }
            }else{
                if(match(s,p,i,j-1)){
                    dp[i][j] = dp[i-1][j] || dp[i][j-2];
                }else{
                    dp[i][j] = dp[i][j-2];
                }
            }
        }
    }
    return dp[m][n];
};
// @lc code=end

