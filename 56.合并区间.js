/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 错误解法， 因为分治情况下，子问题的返回有多样性，导致问题不是可重复的
// var merge = function(intervals) {
//     function mergeTwoArrays(A,B){
//         console.log('A<',A,B);
//         if(!A || !B) return A || B;
//         let compareA =A,compareB = B;
//         let Aleft = compareA[0];
//         let Bleft = compareB[0];
//         let Aright = compareA[1];
//         let Bright = compareB[1];
//         if(Bleft <= Aright && Bright > Aright){
//             return [Math.min(Aleft,Bleft),Math.max(Aright,Bright)];
//         }
//         return [A,B];
//     }
//     function mergeLists(intervals,left,right){
//         if(left === right){
//             return intervals[left];
//         }
//         if(left > right){
//             return null;
//         }
//         let mid = (left + right) >>1;
//         console.log('mid',left,mid,right);
//         return mergeTwoArrays(mergeLists(intervals,0,mid),mergeLists(intervals,mid+1,right)); 
//     }
//     let left =0 ;
//     let right = intervals.length-1;
//     return mergeLists(intervals,left,right);
// };

var merge = function(intervals) {
    let res = [];
    if(intervals.length === 0)return null;
    intervals.sort((a,b)=>a[0]-b[0]);
    res.push(intervals[0]);
    for(let i=1;i<intervals.length;i++){
        let last = res[res.length-1];
        if(intervals[i][0] <= last[1] && intervals[i][0] >= last[0]){
            res[res.length-1] = [Math.min(last[0],intervals[i][0]),Math.max(last[1],intervals[i][1])];
        }else{
            //  无法合并区间
            res.push(intervals[i]);
        }
    }
    return res;
}


// @lc code=end

