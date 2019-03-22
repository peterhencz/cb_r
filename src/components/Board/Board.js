import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Draggable from 'react-draggable';
import { getColors } from '../../actions/colorAction';
import './Board.css';

import Card from '../Card/Card';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      dataZ: 0,
    };
  }

  componentDidMount() {
    this.props.getColors();
  }

  setCardOnTop() {
    this.setState({
      dataZ: this.state.dataZ + 1,
    });
  }

  renderColors(colors) {
    if (colors) {
      return Object.entries(colors)
        .sort((a, b) => b[0] - a[0])
        .map(([_id, colors], id) => (
          <Draggable bounds="parent" onMouseDown={dataZ => this.setCardOnTop()}>
            <div>
              <Card id={_id} color={colors.color} dataZ={this.state.dataZ} />
            </div>
          </Draggable>
        ));
    } else {
      console.log('loading');
    }
  }

  render() {
    const { colors } = this.props;
    return (
      <div className="board" dataZ={this.state.dataZ}>
        {this.renderColors(colors)}
      </div>
    );
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
