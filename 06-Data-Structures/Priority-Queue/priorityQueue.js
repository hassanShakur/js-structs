class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

// Uses a Min Binary Heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let elementIndex = this.values.length - 1;
    const element = this.values[elementIndex];

    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.priority < element.priority) break;
      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.trickleDown();
    }
    return min;
  }

  trickleDown() {
    const element = this.values[0];
    let index = 0;
    const length = this.values.length;
    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = leftChildIndex + 1;
      let swapIndex = null;
      let leftChild, rightChild;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority)
          swapIndex = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swapIndex && rightChild.priority < leftChild.priority) ||
          (!swapIndex && rightChild.priority < element.priority)
        )
          swapIndex = rightChildIndex;
      }

      if (swapIndex === null) break;
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }
}

const q = new PriorityQueue();
q.enqueue('cold', 5);
q.enqueue('shot', 2);
q.enqueue('fever', 3);
q.enqueue('not-breathing', 1);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
