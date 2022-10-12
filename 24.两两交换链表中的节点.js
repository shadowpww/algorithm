/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 var swapPairs = function(head) {
    if(!head || head.length === 0) return null;
    let odd = head;
    let even = head.next;
    let res = new ListNode(null);
    let work = res;
    while(odd && even){
        work.next = even;
        let tmp = even.next;
        even.next = odd;
        work = odd;
        work.next =null;
        if(tmp){
            odd = tmp
        }else{
            odd= null;
            even = null
            break;
        }
        if(tmp.next){
            even = tmp.next;
        }else{
            even = null;
        }   
    }
    if(odd){
        work.next = odd;
    }
    if(even){
        work.next = even;
    }
    return res.next;
};
// @lc code=end

