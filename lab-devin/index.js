'use strict';

class SLL {
  constructor (val) {
    this.value = val;
    this.next = null;
  }

  appendNode(node) {
    if(!(node instanceof SLL)) {return null;}
    if(!this.next){
      this.next = node;
      return;
    }
    this.appendNode(node)
  }

  removeNode(node) {
    if(!(node instanceof SLL)) {return null;}

    this.node = node;
    node.val = node.val;
    node.next = node.next.next;
    return;
  }

  forEach(cb) {
    let curr = this;
    while(curr){
      cb(curr, this);
      curr = curr.next;
    }
  }

  findMiddleNode() {
    let slow, fast;
    slow = fast = this;
    (while fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  reverse() {
    let curr = this;
    let prev = null;
    while(curr){
      let thrw = curr.next;
      curr.next = previous;
      previous = curr;
      curr = thrw;
    }
    return previous;
  }

}

module.exports = SLL;
