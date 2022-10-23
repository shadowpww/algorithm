/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1)return l2;
    if(!l2) return l1;
    let dump = new ListNode(null);
    let last = dump; // 执行结果链表中的最后一个节点
    while(l1 && l2){
        let v1 = l1.val;
        let v2 = l2.val;
        if(v1 < v2){
            last.next = l1;
            last = l1;
            l1 = l1.next;
        }else{
            last.next = l2;
            last = l2;
            l2 = l2.next;
        }
    }
    let tmp = l1 || l2;
    while(tmp){
        last.next = tmp;
        last = tmp;
        tmp = tmp.next;
    }
    return dump.next;
};
// @lc code=end

