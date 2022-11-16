/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let m = matrix.length;
    if(m ===0){
        return 0;
    }
    let n = matrix[0].length;
    let maxLenth = 0;
    let dp = Array.from({length:m},()=>{
        return new Array(n).fill(0);
    })
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] === '1'){ // 已经遍历过的陆地格子，会修改其内部的值为“2”
                if(i === 0 || j ==0){
                    dp[i][j] = 1;
                }else{
                    dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+ 1;
                }
                maxLenth = Math.max(dp[i][j],maxLenth);
            }else{
                dp[i][j] = 0;
            }
        }
    }
    return maxLenth**2;
};
// @lc code=end

