/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
    let map =  [];
    let work = head;
    while(!!work){
        let val = work.val;
        map.push(val);
        work = work.next;
    }
    map.sort((a,b)=>a-b);
    let res = new ListNode(null);
    let p = res;
    for(let val of map){
        p.next = new ListNode(val);
        p = p.next;
    }
    return res.next;
};
// @lc code=end

