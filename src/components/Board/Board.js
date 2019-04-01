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
    this.state = {};
  }

  componentDidMount() {
    this.props.getColors();
  }

  componentDidUpdate(prevState) {
    if (prevState.colors !== this.state.colors) {
      this.renderColors();
    }
  }

  renderColors(colors) {
    if (colors) {
      return Object.entries(colors)
        .sort((a, b) => b[0] - a[0])
        .map(([_id, colors], id) => (
          <Draggable>
            <div>
              <Card
                id={colors._id}
                color={colors.color}
                zIndex={0}
                style={{
                  background: this.props.bg,
                  margin: this.props.margin,
                  zIndex: this.props.zIndex,
                }}
              />
            </div>
          </Draggable>
        ));
    } else {
      console.log('loading');
    }
  }

  render() {
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
