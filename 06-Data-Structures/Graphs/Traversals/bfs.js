const graph = require('./../graph');
const queue = require('./utils/queue');

const breadthFirstSearch = (start) => {
  const result = [];
  const visited = {};
  queue.enqueue(start);
  visited[start] = true;
  let curr;

  while (queue.size) {
    curr = queue.dequeue();
    result.push(curr);

    graph.adjacencyList[curr].forEach((neigh) => {
      if (!visited[neigh]) {
        visited[neigh] = true;
        queue.enqueue(neigh);
      }
    });
  }
  return result;
};

breadthFirstSearch('A');

//       A
//     /    \
//    B ---- C
//     \    /
//        D

// A => [B,C]
// B => [A,D,C]
// C => [B,A,D]
// D => [B,C]
// (res) => [A, B, C, D];
