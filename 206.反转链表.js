/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let dumptyHead = new ListNode(null);
    let work = head;
    while(work){
        let next = work.next;
        work.next = dumptyHead.next;
        dumptyHead.next = work;
        work = next;
    }
    return dumptyHead.next;
};
// @lc code=end

