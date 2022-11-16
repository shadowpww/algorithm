/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let lremove = 0;
    let rremove = 0;
    for(let v of s){
        if(v ==='('){
            lremove++;
        }else if(v === ')'){
            if(lremove > 0){
                lremove--;
            }else{
                rremove++;
            }
        }
    }

    // 判断是否是有效的括号字符串
    function isValid(s){
        let count = 0;
        for(let v of s){
            if(v==='('){
                count++;
            }else if(v===')'){
                count--;
                if(count < 0){
                    return false;
                }
            }
        }
        return count === 0;
    }   

    let res = [];

    function dfs(str,start,lremove,rremove){
        if(isValid(str)){
            res.push(str);
            return ;
        }
       
        for(let i=start;i<str.length;i++){
            if(i !== start && str[i]  === str[i-1]) continue;
        if(lremove > 0 && str[i] === '('){
            dfs(str.slice(0,i)+ str.slice(i+1),i,lremove-1,rremove);
        }
        if(rremove > 0 && str[i] === ')'){
            dfs(str.slice(0,i)+ str.slice(i+1),i,lremove,rremove-1);
        }}
    }
    dfs(s,0,lremove,rremove);
    return [...new Set(res)];

};
// @lc code=end

