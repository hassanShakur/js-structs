class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //   Add elements
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   Remove tail
  pop() {
    // Empty list
    if (!this.head) return undefined;

    let current = this.head;
    let prev = current;

    // Traverse to the end
    while (current.next) {
      prev = current;
      current = current.next;
    }

    // Update tail
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // Check if list is empty & update the necessary
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  //   Remove head 😅
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  //   Insert at the head 😅
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //   Get node at an index
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //   Update node value
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    newNode.next = temp;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;

    return removed;
  }

  visualize() {
    const arr = [];
    let current = this.head;
    if (!current) return null;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr.join(' --> ');
  }

  reverse() {
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;
    let nextNode;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.visualize());
console.log(list.reverse().visualize());
// console.log(list);
