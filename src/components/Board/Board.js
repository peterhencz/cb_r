import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getColor } from '../../actions';
import './Board.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

class Board extends Component {
  state = {};

  componentDidMount() {
    this.props.getColor();
    console.log(this.state);
  }

  getAllColor = () => {
    const { color } = this.props;
    this.setState({ colors: color.color[0].color });
    console.log(this.state);
    console.log('cica: ', this.state.colors);
  };

  oneColor = () =>
    this.state.color.map(
      name => this.setState({ onecolor: name }),
      console.log(this.state.oneColor)
    );

  render() {
    console.log(this.state.colors);
    return (
      <div>
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
