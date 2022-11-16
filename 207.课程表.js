/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let len = prerequisites.length;
    if(len === 0 ){
        return true;
    }
    let adjustTable = Array.from({length:numCourses},()=>[]);
    let inDegree = new Array(numCourses).fill(0);
    let queue = [];
    // 初始化邻接表
    for(let [a,b] of prerequisites){
        adjustTable[b].push(a);
        ++inDegree[a];
    }
    for(let i=0;i<inDegree.length;i++){
        if(inDegree[i] ===0) queue.push(i);
    }
    let ans = 0;
    while(queue.length>0){
        let curCourse = queue.pop();
        ++ans;
        for(let tmp of  adjustTable[curCourse]){
            --inDegree[tmp];
            if(inDegree[tmp] === 0)
                queue.push(tmp);
        }
    }
    return ans === numCourses;
};
// @lc code=end

