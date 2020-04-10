

export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder=[]; // used for visualizing path
  startNode.distance = 0;

  const unvisitedNodes = getAllNodes(grid);

  // Edge case
  if(!startNode || !finishNode || startNode === finishNode) {
    return false
  }
  nodes[startNode].distance = 0;
  const unvisitedNodes = nodes.slice();
  // use min heap for data structure
  while(!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes)
    closestNode = unvisitedNodes.unshift();

    closestNode.isVisited = true;
    if(closestNode === finishNode) return "success!!";
    updateNeighbors(closestNode, grid);
  }
}

function sortNodesByDistance(unvisitedNodes){
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateNeighbors(node, grid) {
  const neighbors = getNeighbors(node, grid);
  for(const neighbor of neighbors) {
    neighbor,distance = node.distance +1;
  }
}

function getNeighbors(node, gird) {
  const neighbors = [];
  // use min heap for data structure


}

function getAllNodes(grid){
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}