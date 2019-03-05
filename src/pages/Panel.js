import React, { Component } from 'react';
import Board from '../components/Board/Board';
import Header from '../components/Header/Header';

class Panel extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    );
  }
}

export default Panel;
