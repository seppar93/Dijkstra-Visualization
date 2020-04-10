import React, { Component } from 'react';
import Node from './Node/Node';
import {dijkstra} from '../algorithm/dijkstra'
import './PathFindingVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 45

export default class PathFindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gird: []
    };
  }

  componentDidMount() {
    const gird = getInitialGrid();
    this.setState({grid})
  }
  visualizeDijkstra(){
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNide = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNide);
    console.log(visitNodesInOrder);
  }

  render() {
    const {grid} = this.state;
    return (
      <>
      <button onClick={() => this.visualizeDijkstra()}>
        Visualize Algorithm
      </button>
      <div className='grid'>
        {this.state.nodes.map((row, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((node, nodeIndex) => {
                const {isStart, isFinish} = node;
                 
                return (
                  <Node
                    key={nodeIndex}
                    isStart={isStart}
                    isFinish={isFinish}
                    test={'as'}
                    test={'asss'}>
                    </Node>
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
