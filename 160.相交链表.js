/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//     if(!headA || !headB) return false;
//     let workA = headA;
//     let workB = headB;
//     let lenA =0,lenB =0;
//     while(workA){
//         workA = workA.next;
//         lenA++;
//     }
//       while(workB){
//         workB = workB.next;
//         lenB++;
//     }
  
//     if(lenB > lenA){
//         workA = headB;
//         workB = headA;
//     }else{
//         workA = headA;
//         workB = headB;
//     }
//     let gap =  Math.abs(lenA -lenB); 
//     while(gap >0){
//         workA = workA.next;
//         gap--;
//     }

//     while(workA  && workB){
//         if(workA === workB){
//             return workA;
//         }else{
//             workA = workA.next;
//             workB = workB.next;
//         }
//     }
//     return null
// };

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return false;
    let workA = headA;
    let workB = headB;
    while(workA !== workB){
        workA = workA === null ? headB : workA.next;
        workB = workB === null ? headA : workB.next;
    }

    return workA;
};

// @lc code=end

