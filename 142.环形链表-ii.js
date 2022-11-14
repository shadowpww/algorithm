/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
//  var detectCycle = function(head) {
//     if(!head) return null;
//     let work = head;
//     let map = new Map();
//     let pos = 0;
//     while(work &&!map.has(work)){
//         map.set(work,pos);
//         work = work.next;
//         pos++;
//     };
//     if(!work) return null;
//     return work;
// };
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while(true){
        if(!fast ||  !fast.next) return null;
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast){
            break;
        };
    }
    fast = head;
    while(fast !== slow){
        fast= fast.next;
        slow = slow.next;
    }
    return slow;
};

// @lc code=end

