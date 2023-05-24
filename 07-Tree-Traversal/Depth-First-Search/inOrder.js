const tree = require('./tree');

const inOrderDFS = (tree) => {
  const visited = [];
  const start = tree.root;

  //   Recursive func
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    visited.push(node.value); // The only difference
    if (node.right) traverse(node.right);
  };

  traverse(start);
  console.log(visited);
  return visited;
};

inOrderDFS(tree);

//       5
//   3          8
// 2    4   6       9
