const graph = require('./../graph');
const stack = require('./utils/stack');

const dfsIterative = (start) => {
  const result = [];
  const visited = {};
  stack.push(start);
  visited[start] = true;
  let curr;

  while (stack.size) {
    curr = stack.pop();
    result.push(curr);

    graph.adjacencyList[curr].forEach((neigh) => {
      if (!visited[neigh]) {
        visited[neigh] = true;
        stack.push(neigh);
      }
    });
  }
  console.log(result);
  return result;
};

dfsIterative('A')

//       A
//     /    \
//    B ---- C
//     \    /
//        D

// A => [B,C]
// B => [A,D,C]
// C => [B,A,D]
// D => [B,C]
// (res) => [A, C, D, B];
