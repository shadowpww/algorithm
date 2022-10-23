/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pre = work = head;
    for(let i =0;i<n;i++){
        if(work){
            work = work.next;
        }else{
            return head; // 链表长度不够
        }
    }
    if(!work) return head.next;
    while(work.next){
        pre = pre.next;
        work = work.next;
    }
    pre.next = pre.next.next;
    return head;
};
// @lc code=end

