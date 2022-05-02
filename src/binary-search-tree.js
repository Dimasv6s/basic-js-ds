const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BinarySearchTree {
  constructor() {
    this.storage = null
  }

  root() {
    return this.storage
  }

  add(data) {
    const node = this.storage
    if (node === null) {
      this.storage = new Node(data)
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
          } else {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return
          } else {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      searchTree(node)
    }
  }

  has(data) {
    return this.find(data) ? true : false
  }

  find(data) {
    let current = this.storage
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.storage
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this.storage
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};