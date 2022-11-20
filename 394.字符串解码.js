/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let res = "";

    function isLetter(s){
        return /[a-zA-Z]/g.test(s);
    }

    function isNumber(s){
        return /[0-9]/g.test(s);
    }

    let flag = false; // 不在重复区间内
    let stack = []; 
    for(let i=0;i<s.length;){
        if(flag === false){
            if(isLetter(s[i])){
                // 普通字母直接放入结果字符串
               res += s[i];
               i++; 
           }else{
            flag = true;
            stack.push(s[i]);
            i++;
           }
        }else{
            while(s[i] !==']'){
                stack.push(s[i]);
                i++;
            }
            let repeatStr = "";
            let repeatTimes = 0;
            let repeatRes = "";
            while(stack.length>0){
                let curStr = stack.pop();
                if(isLetter(curStr)){
                    repeatStr =  curStr + repeatStr;
                }else if(isNumber(curStr)){
                    let repeatTimesStr = curStr;
                    while(isNumber(stack[stack.length-1])){
                        let next = stack.pop();
                        repeatTimesStr = next + repeatTimesStr;
                    }
                    repeatTimes = +repeatTimesStr;
                    repeatRes =  repeatStr.repeat(repeatTimes);
                    if(stack.length ===0){
                        res += repeatRes;
                        flag = false;
                    }else{
                        flag = true;
                        stack.push(repeatRes);
                    }
                    break;
                }
            }
            i++;
        }

    }
    return res;
};
// @lc code=end

