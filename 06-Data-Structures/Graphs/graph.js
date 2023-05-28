class Graph {
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
      this.removeEdge(vertex, vtx);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1].push(vtx2);
    this.adjacencyList[vtx2].push(vtx1);
  }

  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      (vtx) => vtx !== vtx2
    );
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      (vtx) => vtx !== vtx1
    );
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addEdge('A', 'B');
g.addEdge('B', 'D');
g.addEdge('B', 'C');
g.addEdge('A', 'C');
g.addEdge('C', 'D');

module.exports = g;
// console.log(g);

//       A
//     /    \
//    B ---- C
//     \    /
//        D
