const Queue = require('./queue');
const tree = require('./tree');

const BreadthFirstSearch = (tree) => {
  const queue = new Queue();
  const visited = [];
  let curr = tree.root;
  queue.enqueue(curr);

  while (queue.size) {
    curr = queue.dequeue();
    visited.push(curr.value);
    if (curr.left) queue.enqueue(curr.left);
    if (curr.right) queue.enqueue(curr.right);
  }
  console.log(visited);
  return visited;
};

BreadthFirstSearch(tree);

//       5
//   3          8
// 2    4   6       9
