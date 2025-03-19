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
