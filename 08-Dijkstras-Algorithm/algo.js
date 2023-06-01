const graph = require('./weightedGraph');
const nodesPriQueue = require('./prioQueue');

const dijkstraAlgo = (start, finish) => {
  const distances = {};
  const prevVertex = {};
  const pathToTarget = [];

  // Set Infinity distances except for start node & prevVertex to null
  for (let vertex in graph.adjacencyList) {
    distances[vertex] = vertex === start ? 0 : Infinity;
    prevVertex[vertex] = null;
  }

  // Include all nodes to the priority q to know which to pick next
  for (let vertex in graph.adjacencyList)
    vertex === start
      ? nodesPriQueue.enqueue(vertex, 0)
      : nodesPriQueue.enqueue(vertex, Infinity);

  //   While queue is not empty
  let smallest;
  while (nodesPriQueue.values.length) {
    smallest = nodesPriQueue.dequeue().value;

    // If we reached the target, break and construct path to target
    if (smallest === finish) {
      //   console.log(distances);
      //   console.log(prevVertex);
      // Build path to return - Loop through prevVertex and create the path
      while (prevVertex[smallest]) {
        pathToTarget.push(smallest);
        smallest = prevVertex[smallest];
      }
      break;
    }

    if (smallest || distances[smallest] !== Infinity) {
      // Loop over all neighbours of this current vertes
      graph.adjacencyList[smallest].forEach((neigh) => {
        // console.log(neigh.node, '✅✅');
        // Potential new distance to this neighbour
        const newDistance = distances[smallest] + neigh.weight;
        // Check if new distance is less than curr distance to the neigh
        if (newDistance < distances[neigh.node]) {
          // Update distance
          distances[neigh.node] = newDistance;
          // Update prev vertext of the neigh to be the smallest - curr node
          prevVertex[neigh.node] = smallest;
          // Updates nodes priority in the queue
          nodesPriQueue.enqueue(neigh.node, newDistance);
        }
      });
    }
  }
  const path = pathToTarget.concat(smallest).reverse().join(' -> ');
  console.log(path);
  return path;
};

dijkstraAlgo('A', 'D');

//       A
//   4 /    \ 1
//    B --3-- C
//   6 \    / 8
//        D
