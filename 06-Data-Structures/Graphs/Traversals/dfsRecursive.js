const graph = require('./../graph');

const dfsRecursive = (start) => {
  let result = [];
  let visited = {};

  const visit = (vertex) => {
    if (!vertex) return null;
    visited[vertex] = true;
    result.push(vertex);

    // console.log(graph.adjacencyList[vertex]);
    graph.adjacencyList[vertex].forEach((neigh) =>
      !visited[neigh] ? visit(neigh) : null
    );
  };

  visit(start);
  console.log(result);
  return result;
};

dfsRecursive('A');

//       A
//     /    \
//    B ---- C
//     \    /
//        D

// A => [B,C]
// B => [A,D,C]
// C => [B,A,D]
// D => [B,C]
// (res) => [A, B, D, C];
