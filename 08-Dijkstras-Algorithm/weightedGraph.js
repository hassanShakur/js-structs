class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return;
    this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const vtx = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vtx.node);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vtx1, vtx2, weight) {
    this.adjacencyList[vtx1].push({ node: vtx2, weight });
    this.adjacencyList[vtx2].push({ node: vtx1, weight });
  }

  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      (vtx) => vtx.node !== vtx2
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      (vtx) => vtx.node !== vtx1
    );
  }
}

const g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addEdge('A', 'B', 4);
g.addEdge('B', 'D', 6);
g.addEdge('B', 'C', 3);
g.addEdge('A', 'C', 1);
g.addEdge('C', 'D', 8);

//       A
//   4 /    \ 1
//    B --3-- C
//   6 \    / 8
//        D

module.exports = g;
