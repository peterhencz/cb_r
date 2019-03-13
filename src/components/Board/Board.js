import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getColors } from '../../actions/colorAction';
import { getColors } from '../../actions/colorAction';
import './Board.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

class Board extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getColors();
    console.log(this.props.getColors());
  }

  renderColors(colors) {
    console.log(colors);
    if (colors) {
      return colors.map(<div>cica</div>);
    } else {
      console.log('kisfaszom');
    }
  }

  render() {
    const { colors } = this.props;
    console.log(colors);
    return <div>{this.renderColors()}</div>;
  }
}

const mapStateTopProps = state => {
  console.log(state);
  return {
    colors: state.colors,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getColors,
    },
    dispatch
  );
};

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(Board);
