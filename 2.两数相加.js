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
  let acc = 0;
  let l1Head = l1;
  let l2Head = l2;
  const res = new ListNode(null);
  let  work = res;
  while(l1Head && l2Head){
    const l1val = l1Head.val;
    const l2val = l2Head.val;
    let  cur = (l1val + l2val + acc) % 10;
    acc = Math.floor((l1val + l2val + acc) /10);
    work.next = new ListNode(cur);
    work = work.next;
    l1Head = l1Head.next;
    l2Head = l2Head.next;
  }
  let rest =  l1Head || l2Head; 
  while(rest){
   let  cur = (rest.val + acc) %10;
     acc = Math.floor((rest.val + acc) /10);
    work.next = new ListNode(cur);
    work = work.next;
    rest = rest.next;
  }
  if(acc){
    work.next = new ListNode(acc);
  }
  return res.next;
};
// @lc code=end

