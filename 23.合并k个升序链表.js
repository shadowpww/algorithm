/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 var mergeKLists = function(lists) {
    function mergeTwoLists(list1,list2){
        let ans = new ListNode(null);
        let work = ans;
        let n1 = list1;
        let n2 = list2;
        while(n1 && n2){
            if(n1.val < n2.val){
                work.next = n1;
                n1 = n1.next;
            }else{
                work.next = n2;
                n2 = n2.next;
            }
            work = work.next;
        }
        work.next = n1 ? n1 : n2; 
        return ans.next;
    }
    function merge(lists,left,right){
        if(left === right){
            return lists[left];
        }
        if(left>right) return null;
        let mid = (left + right) >>1;
        return mergeTwoLists(merge(lists,left,mid),merge(lists,mid+1,right));
    }
   return   merge(lists,0,lists.length-1);
};

// var mergeKLists = function(lists) {
//     let result = null;
//     function mergeTwoLists(list1,list2){
//         let ans = new ListNode(null);
//         let work = ans;
//         let n1 = list1;
//         let n2 = list2;
//         while(n1 && n2){
//             if(n1.val < n2.val){
//                 work.next = n1;
//                 n1 = n1.next;
//             }else{
//                 work.next = n2;
//                 n2 = n2.next;
//             }
//             work = work.next;
//         }
//         work.next = n1 ? n1 : n2; 
//         return ans.next;
//     }
//     for(let i= 0;i<lists.length;i++){
//        result = mergeTwoLists(result,lists[i]);
//     }
//     return result;
// };
// @lc code=end

