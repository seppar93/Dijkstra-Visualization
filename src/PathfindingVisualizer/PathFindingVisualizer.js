import React, { Component } from 'react';
import Node from './Node/Node';
import { dijkstra } from '../algorithm/dijkstra';
import './PathFindingVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 45;

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++){
    const currentRow = [];
    for(let col = 0; col < 50; col++){
      currentRow.push(createNode(col, row))
    }
    grid.push(currentRow)
  }
  return grid;
}

export default class PathFindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gird: [],
    };
  }

  componentDidMount() {
    const gird = getInitialGrid();
    this.setState({ grid });
  }
  visualizeDijkstra() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNide = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNide);
    console.log(visitNodesInOrder);
  }

  render() {
    const { grid } = this.state;
    return (
      <>
        <button onClick={() => this.visualizeDijkstra()}>
          Visualize Algorithm
        </button>
        <div className='grid'>
          {grid.map((row, rowIndex) => {
            return (
              <div key={rowIndex}>
                {row.map((node, nodeIndex) => {
                  const { isFinish, isStart, isVisited } = node;
                  return (
                    <Node
                      key={nodeIndex}
                      isStart={isStart}
                      isFinish={isFinish}
                      isVisited={isVisited}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

