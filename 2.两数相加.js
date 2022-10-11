/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function(l1, l2) {
    let l1start = l1;
    let l2start = l2;
    while(l1.next !== null){
        l1 = l1.next;
    }
    while(l2.next !== null){
        l2 = l2.next;
    }
    l1.next = l1start;
    l2.next = l2start;

    //改写原指针。
    l1start.next = null;
    l2start.next = null;

    //工作指针
    let p1 = l1;
    let p2 = l2;
    let acc = 0;
    let res = null;

    while(p1.next !== null || p2.next !== null){
        let v1 = p1.val;
        let v2 = p2.val;
        let value =  (acc + v1+ v2)%10;
        acc = (acc + v1+ v2) /10;
        let newNode =  {
            val:value,
            next:null
        }
        newNode.next =res;
        res = newNode;
       
        p1 = p1.next;
        p2 = p2.next;
    }
    while(p1.next !==null){
        let v1 = p1.val;
        let value =  (acc + v1)%10;
        acc = (acc + v1) /10;
        let newNode =  {
            val:value,
            next:null
        }
        newNode.next =res;
        res = newNode;
    }
    while(p2.next !==null){
        let v1 = p2.val;
        let value =  (acc + v2)%10;
        acc = (acc + v2) /10;
        let newNode =  {
            val:value,
            next:null
        }
        newNode.next =res;
        res = newNode;
    }
    return res;
};
// @lc code=end

