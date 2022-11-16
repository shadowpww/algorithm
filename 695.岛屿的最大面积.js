/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let m = grid.length;
    if(m ===0)return 0;
    let n = grid[0].length;
    let res = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === 1){
                let ans = areaDfs(grid,i,j);
                res = Math.max(res,ans);
            }
        }
    }
    function areaDfs(grid,row,col){
        if(!isValidIdx(row,col)){
            return 0;
        }
        if(grid[row][col] !== 1)return 0;
        grid[row][col] = 2;
        let directions = [[0,-1],[0,1],[1,0],[-1,0]];
        let ans = 1;
        console.log('ans-pr',ans);
        for(let [x,y] of directions){
            ans = ans + areaDfs(grid,row+x,col+y);
        }
        console.log('ans-aft',ans);
        return ans;
    }

    function isValidIdx(i,j){
        if(i>=m || j>=n || i<0 || j<0) return false;
        return true;
    }
    return res;
};
// @lc code=end

