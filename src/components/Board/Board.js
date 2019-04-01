import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Draggable from 'react-draggable';
import { getColors } from '../../actions/colorAction';
import './Board.css';

import Card from '../Card/Card';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  componentDidMount() {
    this.props.getColors();
  }
  setCardOnTop = () => {
    this.setState(
      {
        dataZ: this.state.dataZ + 1,
      },
      console.log('kiscica', this.state.dataZ)
    );
  };

  renderColors(colors) {
    if (colors) {
      return Object.entries(colors)
        .sort((a, b) => b[0] - a[0])
        .map(([_id, colors], id) => (
          <div>
            <Card id={colors._id} color={colors.color} />
          </div>
        ));
    } else {
      console.log('loading');
    }
  }

  render() {
    console.log(this.props.dataZ);
    const { colors } = this.props;
    return <div className="board">{this.renderColors(colors)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    colors: state.color.colors,
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
  mapStateToProps,
  mapDispatchToProps
)(Board);
