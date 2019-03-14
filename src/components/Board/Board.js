import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getColors } from '../../actions/colorAction';
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
    console.log(this.props.getColors());
  }

  renderColors(colors) {
    if (colors) {
      return Object.entries(colors)
        .sort((a, b) => b[0] - a[0])
        .map(([_id, colors], id) => (
          <div>
            <Card id={_id} color={colors.color} />
          </div>
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
