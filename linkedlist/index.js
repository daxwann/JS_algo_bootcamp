// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(input, node = null) {
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

    if (idx === 0) {
      return currNode
    } 
  }

  removeAt(idx) {
    let nodeToRemove = this.getAt(idx);

    if (!nodeToRemove) {
      return null;
    }

    let nextNode = nodeToRemove.next;
    let prevNode = this.getAt(idx - 1);

    if (prevNode) {
      prevNode.next = nextNode;
    } else {
      this.head = nextNode;
    }
  }

  insertAt(data, idx) {
    let currNode = this.getAt(idx);
    let newNode = new Node(data, null);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else if (currNode === this.head || idx < 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (!currNode) {
      this.tail.next = newNode;
      newNode = this.tail;
    } else {
      let prevNode = this.getAt(idx - 1);

      newNode.next = currNode;
      prevNode.next = newNode;
    }
  }

  forEach(fn) {
    let currNode = this.head;

    while (currNode) {
      fn(currNode);
      currNode = currNode.next;
    }
  }

  *[Symbol.iterator]() {
    let currNode = this.head;

    while (currNode) {
      yield currNode;
      currNode = currNode.next;
    }
  }
}

module.exports = { Node, LinkedList };
