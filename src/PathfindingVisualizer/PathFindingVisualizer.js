import React, { Component } from 'react';
import Node from './Node/Node';
import {dijkstra} from '../algorithm/dijkstra'

export default class PathFindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    };
  }

  componentDidMount() {
    // when the component mounts loop through the grid and add the array into state
    const nodes = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          col,
          row,
          isStart: row === 10 && col === 5,
          isFinish: row === 10 && col === 45
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    this.setState({ nodes });
  }

  render() {
    return (
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
    );
  }
}
