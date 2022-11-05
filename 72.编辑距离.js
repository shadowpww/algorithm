/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    let dp = Array.from({length:len1+1},()=>{
        return new Array(len2+1).fill(0);
    })
    for(let i=0;i<=len1;i++){
        dp[i][0] = i;
    }
    for(let j=0;j<=len2;j++){
        dp[0][j] = j;
    }

    for(let i=1;i<=len1;i++){
        for(let j=1;j<=len2;j++){
            let case1 = dp[i-1][j] + 1; // 在word1 中插入一个字符的情况
            let case2 = dp[i][j-1] +1; // 在word2 中插入一个字符的情况
            let case3 = word1[i-1] === word2[j-1] ? dp[i-1][j-1] :  dp[i-1][j-1]+1;
            dp[i][j] = Math.min(case1,case2,case3);
        }
    }
    return dp[len1][len2];
};
// @lc code=end

