/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let m = grid.length;
    if(m ==0)return 0;
    let n = grid[0].length;
    let res = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === 1){
                return lineDfs(grid,i,j);
            }
        }
    }
    function lineDfs(grid,row,col){
        if(!isValid(row,col)){
            return 1;
        }
        if(grid[row][col] === 0) return 1;
        if(grid[row][col] === 2) return 0;
        grid[row][col] = 2;
        let direcionts = [[0,-1],[1,0],[0,1],[-1,0]];
        let res = 0;
        for(let [x,y] of direcionts){
            res += lineDfs(grid,row+x,col+y);
        }
        return res;
    }

    function isValid(row,col){
        if(row <0 || col < 0 || row>=m || col >=n) return false;
        return true;    
    }
    return res;

};
// @lc code=end

