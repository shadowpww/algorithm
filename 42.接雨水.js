/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
//  var trap = function(height) {
//     let left = [0];
   
//     for(let i=1;i<height.length;i++){
//         if(height[i-1] >= left[i-1]){
//            left[i] = height[i-1];
//         }else{
//             left[i] = left[i-1];
//         }
//     }
//     let right = new Array(height.length).fill(0);
//    for(let i=height.length-2;i>=0;i--){
//        if(height[i+1] >= right[i+1]){
//            right[i]= height[i+1];
//        }else{
//            right[i] = right[i+1];
//        }
//    }
  
//   let res = 0;
//   for(let i=0;i<height.length;i++){
//       let h = Math.min(left[i],right[i]);
//       res  += h - height[i] > 0 ? h - height[i] : 0;
//   }
  
//   return res;
//   };


// var trap = function(height) {
//   let maxL = 0,maxR  = 0;
//   let left = 0,right = height.length-1;
//   let res = 0;
//     while(left< right){
//         maxL = Math.max(maxL,height[left]);
//         maxR = Math.max(maxR,height[right]);
//         if(maxL < maxR){
//             res +=  maxL - height[left]
//             left++;
//         }else{
//             res += maxR - height[right];
//             right--;
//         }
//     }
//   return res;
//   };


var trap = function(height) {
    let leftMax = new Array(height.length);
    leftMax[0] = height[0];
    let rightMax = new Array(height.length);
    rightMax[height.length-1] = height[height.length-1];
    for(let i=1;i<height.length;i++){
      if(height[i] > leftMax[i-1]){
        leftMax[i] = height[i];
      }else{
        leftMax[i] = leftMax[i-1];
      }
    }

    for(let j=height.length-2;j>=0;j--){
      if(height[j] > rightMax[j+1]){
        rightMax[j] =  height[j];
      }else{
        rightMax[j] = rightMax[j+1];
      }
    }
    let res = 0;
    for(let i=0;i<height.length;i++){
      res += Math.min(leftMax[i],rightMax[i]) - height[i];
    }
    return res;
};
// @lc code=end

