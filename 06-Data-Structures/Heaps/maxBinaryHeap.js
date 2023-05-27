class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let elementIndex = this.values.length - 1;
    const element = this.values[elementIndex];

    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent > element) break;
      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.trickleDown();
    }
    return max;
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
        if (leftChild > element) swapIndex = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swapIndex && rightChild > leftChild) ||
          (!swapIndex && rightChild > element)
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

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(1);
maxHeap.insert(3);
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(2);
maxHeap.extractMax();
maxHeap.extractMax();
console.log(maxHeap.values);

//          10
//      5        3
//  1       2
