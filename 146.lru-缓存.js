/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */




// function Node(key,val){
   
//     // return {
//     //     key:key,
//     //     value:val,
//     //     prev:null,
//     //     next:null,
//     // }
// }

// @lc code=start
/**
 * @param {number} capacity
 */

// 双向链表节点
class Node{
    constructor(key,val){
        this.key = key;
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.size = 0;
    this.head = new Node(null,null);
    this.tail = new Node(null,null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        let node = this.map.get(key);
        this.moveToHead(node);
        return node.value;
    }else{
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
   if(!this.map.has(key)){
        const newNode = new Node(key,value);
        this.addNode(newNode);
        this.map.set(key,newNode);
        this.size++;
        if(this.size > this.capacity){
            let needTodelete = this.tail.prev;
            let node =  this.deleteNode(needTodelete);
            this.map.delete(node.key);
            this.size--;
        }
   }else{   
    const node = this.map.get(key);
    node.value = value;
    this.moveToHead(node);
   }
};

LRUCache.prototype.addNode = function(node){
    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
}

LRUCache.prototype.moveToHead=function(node){
    this.deleteNode(node);
    this.addNode(node);
}

LRUCache.prototype.deleteNode=function(node){
    node.prev.next =node.next;
    node.next.prev = node.prev;
    return node;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

