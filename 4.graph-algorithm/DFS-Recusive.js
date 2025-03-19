function dfsRecursive(graph, vertex, visited = new Set()) {
  visited.add(vertex);
  console.log(vertex); // Now coming Node

  for (const neighbor of graph.adjacencyList[vertex]) {
    if (!visited.has(neighbor)) {
      dfsRecursive(graph, neighbor, visited);
    }
  }
}
