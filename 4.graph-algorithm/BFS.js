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
