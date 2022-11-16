/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function(grid) {
//     let m = grid.length;
//     if(m===0)return 0;
//     let n = grid[0].length;
//     let count = 0;
//     let visited  = Array.from({length:m},()=>{
//         return new Array(n).fill(false);
//     })

//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             dfs(grid,i,j,0);
//         }
//     }
  
//     function dfs(grid,i,j,depth){
//         if(i>=m || i<0|| j>=n ||j<0){
//             return ;
//         }
//         if(grid[i][j] !== '1')return ;
//         if(visited[i][j])return;
//         let directions = [[0,1],[1,0],[0,-1],[-1,0]];
//         if(!visited[i][j]){
//             visited[i][j] = true;
//             if(depth ==0 ) {count++;};
//             for(let [dx,dy] of directions){
//                 dfs(grid,i+dx,j+dy,depth+1);
//             }
//         }
//     }
//     return count;
// };




var numIslands = function(grid) {
    if(grid.length ===0 )return 0;
    let m = grid.length;
    let n = grid[0].length;
    let visited = Array.from({length:m},()=>{
        return new Array(n).fill(false);
    });
    let count = 0;

    function dfs(grid,row,col){
        if(row>=m || row<0|| col>=n ||col<0){
            return ;
        }
        if(grid[row][col] === '0'){
            return ;
        }
        if(visited[row][col]) return;
        visited[row][col] = true;
        let directions = [[0,-1],[1,0],[0,1],[-1,0]];
        for(let [x,y] of directions){
            let newRow = row+x;
            let newCol = col+y;
            dfs(grid,newRow,newCol);
        }
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(!visited[i][j] && grid[i][j] === '1'){
                count++;
                dfs(grid,i,j);
            }
        }
    }
    return count;
};

// @lc code=end

