/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let res = new Array(people.length).fill(null);

    // 总体思路，先排小的， 再排大的身高，然后同样的身高，k值越大，视作越小。
    people.sort((people1,people2)=>{  
        if(people1[0] !== people2[0]){
            return people1[0] - people2[0];
        }else{
            return people2[1] - people1[1];
        }
    });
    
    for(let v of people){
        let gap = v[1] +1;
        for(let i =0;i<res.length;i++){
            if(res[i] === null){
                gap--;
                if(gap === 0){
                    res[i] = v;
                    break;
                }
            }
        }
    }
    return res;
};
// @lc code=end

