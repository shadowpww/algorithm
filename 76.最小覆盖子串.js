/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// 接近于暴力解法，会超时
// var minWindow = function(s, t) {
//     if(t.length === s.length  && s.length === 1) return  s === t ? s : "";
//     let dp = Array.from({length:s.length+1},()=>{
//         return new Array(s.length+1);
//     });
//     let minLength = Number.MAX_VALUE;
//     let minStr = "";

//     for(let i=0;i<s.length;i++){
//         dp[i][i] = {[s[i]]: 1};
//         if(judge(t,{...dp[i][i]})){
//             minStr  = s.slice(i,i+1);
//             minLength = 1;
//             return minStr;
//         }
//     }
//     for(let i=0;i<s.length;i++){
//         for(let j=i+1;j<s.length;j++){
//             dp[i][j] = {...dp[i][j-1]};
//             if(!!dp[i][j][s[j]]){
//                 dp[i][j][s[j]]  +=1;
//             }else{
//                 dp[i][j][s[j]]  = 1;
//             }
//             if(j-i+1 < minLength){
//                 // 判断两个数组的内容相同
//                 if(judge(t,{...dp[i][j]})){
//                     minStr  = s.slice(i,j+1);
//                     minLength = j-i+1;
//                 }
//             }
//         }
//     }

//     function judge(t,map){
//         for(let i=0;i<t.length;i++){
//             if( !map[t[i]] || map[t[i]] <= 0 ) return false;
//             map[t[i]] -=1;
//         }
//         return true;
//     }
//     return minStr
// };

var minWindow = function(s, t) {
    let need = new Array(128).fill(0);
    let have = new Array(128).fill(0);
    let left =0,right =0; // 滑动窗口的左右边界

    let minLength = s.length +1;
    let start =0;
    let count = 0; //目前找到的满足t中字符的个数
    for(let i=0;i<t.length;i++){
        let charCode = t[i].charCodeAt(0);
        need[charCode] +=  1;
    }
    while(right < s.length){
        let cur = s[right].charCodeAt(0);
        if(!need[cur]){
            right++;
            continue;
        }
        const needNum  = need[cur]
        const hasNum = have[cur];
        if(hasNum < needNum){
            count++;
        }
        have[cur]++;
        right++;
        console.log('count',count);
        while(count === t.length){
             // 说明找到一种包含的子串，尝试更新min
             if(right - left < minLength){
                minLength = right-left;
                start = left;
            }
            // 尝试左移动 左指针 
            const c = s[left].charCodeAt(0);
            if(!need[c]){
                left++;
                continue;
            }
            if(need[c] === have[c]){
                count--;
            }
            have[c]--;
            left++;
        }
    }
    if(minLength === s.length+1)return "";
    return s.slice(start,start+minLength);
};

// @lc code=end

