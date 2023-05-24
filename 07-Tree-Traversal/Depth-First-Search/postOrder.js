const tree = require('./tree');

const postOrderDFS = (tree) => {
  const visited = [];
  const start = tree.root;

  //   Recursive func
  const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value); // The only difference
  };

  traverse(start);
  console.log(visited);
  return visited;
};

postOrderDFS(tree);

//       5
//   3          8
// 2    4   6       9
