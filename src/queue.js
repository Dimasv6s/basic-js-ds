const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.storage = null
  }
  getUnderlyingList() {
    return this.storage
  }

  enqueue(value) {
    if (!this.storage) {
      this.storage = new ListNode(value)
    } else {
      let current = this.storage
      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(value)
    }
  }

  dequeue() {
    const element = this.storage.value
    this.storage = this.storage.next
    return element
  }
}

module.exports = {
  Queue
};
