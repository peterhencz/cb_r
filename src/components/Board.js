import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getColor } from '../actions';
import '../styles/Board.css';
import Button from './Button';
import Card from './Card';

class Board extends Component {
  state = {};

  componentDidMount() {
    this.props.getColor();
    console.log(this.state);
  }

  getAllColor = () => {
    const { color } = this.props;
    this.setState({ colors: color });
    console.log(this.state);
    console.log('cica: ', this.state.colors);
  };

  oneColor = () =>
    this.state.color.map(
      name => this.setState({ onecolor: name }),
      console.log(this.state.oneColor)
    );

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
