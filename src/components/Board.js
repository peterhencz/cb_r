import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getColor } from '../actions';
import '../styles/Board.css';
import Button from './Button';

class Board extends Component {
  state = {};

  // componentDidMount() {
  //   this.props.getColor();
  // }

  render() {
    return (
      <div className="board">
        <Button onClick={this.props.getColor}>cica</Button>
      </div>
    );
  }
}

const mapStateTopProps = state => {
  return {
    color: state.color,
  };
};

const mapDispatchToProps = {
  getColor,
};

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Board);
