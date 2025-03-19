class GraphData {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  visited.add(start);

  console.log("BFS List:");

  while (queue.length > 0) {
    const vertex = queue.shift();
    console.log(vertex); // Now Node Coming

    for (const neighbor of graph.adjacencyList[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  visited.add(start);

  console.log("DFS (Stack) Come List:");

  while (stack.length > 0) {
    const vertex = stack.pop();
    console.log(vertex); // Now Node Come

    for (const neighbor of graph.adjacencyList[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
}

function dfsRecursive(graph, vertex, visited = new Set()) {
  visited.add(vertex);
  console.log(vertex); // Now coming Node

  for (const neighbor of graph.adjacencyList[vertex]) {
    if (!visited.has(neighbor)) {
      dfsRecursive(graph, neighbor, visited);
    }
  }
}

const graph = new GraphData();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

// BFS 실행
bfs(graph, "A");

// DFS 실행 (stack 사용)
console.log("DFS (Recursive) Come List");
dfsRecursive(graph, "A");
