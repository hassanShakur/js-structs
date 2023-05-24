const tree = require('./tree');

const preOrderDFS = (tree) => {
  const visited = [];
  const start = tree.root;

  //   Recursive func
  const traverse = (node) => {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(start);
  console.log(visited);
  return visited;
};

preOrderDFS(tree);

//       5
//   3          8
// 2    4   6       9
