/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    if(!head) return head;
    let start = head;
    let end = head.next;
    while(end !==null){
        start.next = null;
        if(end.val === start.val){
            end = end.next;
        }else{
            start.next = end;
            start =end;
            end = end.next;
        }
    }
    return head;
};
// @lc code=end

