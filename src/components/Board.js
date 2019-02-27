import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getColor } from '../actions';
import '../styles/Board.css';
import Button from './Button';
import Card from './Card';

class Board extends Component {
  state = { color: '' };

  componentWillMount() {
    this.props.getColor();
    console.log(this.state);
  }

  getAllColor = () => {
    const { color } = this.props;
    this.setState({ color: color.color[0].color });
    console.log('cica: ', this.state.color);
  };

  render() {
    return (
      <div className="board">
        <Button onClick={this.getAllColor}>getColor</Button>
        {this.state.color}
        <Card />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getColor: () => dispatch(getColor()),
});

const mapStateTopProps = state => {
  return {
    color: state.color,
  };
};

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Board);
