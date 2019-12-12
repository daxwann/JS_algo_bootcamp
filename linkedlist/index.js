// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(input, node) {
    this.data = input;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    let newNode = new Node(data, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  size() {
    let count = 0;
    let currNode = this.head;

    while (currNode) {
      count += 1;
      currNode = currNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    if (this.head && this.tail) {
      this.head = null;
      this.tail = null;
    }

    return null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }

    return this.head;
  }

  removeLast() {
    let currNode = this.head;

    // if list is empty
    if (currNode === null) {
      return null;
    }

    // if list has one node
    if (currNode === this.tail) {
      this.head = null;
      this.tail = null;
      return null;
    }

    // for list with two or more nodes
    while (currNode.next != this.tail) {
      currNode = currNode.next;
    }

    currNode.next = null;

    this.tail = currNode;

    return this.tail;
  }

  insertLast(data) {
    let newNode = new Node(data, null);

		// for empty list
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return newNode;
		}

		// for list with one or more nodes
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;

      return newNode;
    }

    return null;
  }

  getAt(idx) {
    let currNode = this.head;

    while (idx > 0) {
			if (!currNode) {
				return null;
			}

			currNode = currNode.next;
			idx--;
		}

		return currNode 
  }
}

module.exports = { Node, LinkedList };
