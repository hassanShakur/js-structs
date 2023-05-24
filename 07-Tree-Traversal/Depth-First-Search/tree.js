class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;

        // Left branch
        if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;

          //   Right branch
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) current = current.left;
      else if (val > current.value) current = current.right;
      else found = true;
    }

    return found;
  }
}

const bestie = new BinarySearchTree();
bestie.insert(5);
bestie.insert(8);
bestie.insert(3);
bestie.insert(2);
bestie.insert(9);
bestie.insert(6);
bestie.insert(4);

module.exports = bestie;
//       5
//   3          8
// 2    4   6       9
