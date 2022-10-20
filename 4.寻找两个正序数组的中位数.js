/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function(nums1, nums2) {
   let len1 = nums1.length;
   let len2 = nums2.length;

   let left = Math.floor((len1+len2+ 1) /2);
   let right = Math.floor((len1+len2 + 2)/2);

   return  (getKth(nums1,0,len1-1,nums2,0,len2-1,left) + getKth(nums1,0,len1-1,nums2,0,len2-1,right)) * 0.5;
   
    function getKth(nums1,start1,end1,nums2,start2,end2,k){
        let len1 = end1 - start1 +1;
        let len2 = end2 - start2 +1;
        if(len1 > len2) return getKth(nums2,start2,end2,nums1,start1,end1,k);
        if(len1 ===0) return nums2[start2+k-1];
        if(k==1) return Math.min(nums1[start1],nums2[start2]); // 返回当前两个数组中，第一小的那个数即可

        let mid1 = start1 + Math.min(Math.floor(k/2),len1) -1; // 每个数组取出第k/2个数来比较，数组长度不够的话，就取当前数组的最后一位就好。
        let mid2 = start2 + Math.min(Math.floor(k/2),len2) -1;
        if(nums1[mid1] > nums2[mid2] ){
            return  getKth(nums1,start1,end1,nums2,mid2+1,end2, k - (mid2 - start2 + 1));
        }else{
            return getKth(nums1,mid1+1,end1,nums2,start2,end2,k - (mid1 - start1 + 1));
        }
    }
}; 
// @lc code=end

