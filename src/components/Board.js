import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Board.css';

class Board extends Component {
  state = {
    color: '',
  };

  render() {
    return <div className="board" />;
  }
}

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(Board);
