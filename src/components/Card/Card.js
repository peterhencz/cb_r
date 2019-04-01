import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStyle: 'card',
      bg: '#fff',
      id: '',
      dataZ: 0,
      zIndex: 0,
    };
  }

  fillCardWithColor = () => {
    if (this.state.bg === '#fff') {
      this.setState({
        bg: this.props.color,
      });
    } else {
      this.setState({
        bg: '#fff',
      });
    }
  };

  plusSize = () => {
    this.setState({
      cardStyle: 'card',
    });
  };

  minusSize = () => {
    this.setState({
      cardStyle: 'card-mini',
      id: 'card-mini',
    });
  };

  setCardOnTop = () => {
    this.setState({ zIndex: this.state.zIndex + 1 }, console.log('kiscica', this.state.zIndex));
  };

  render() {
    const { cardStyle, bg, zIndex, dataZ } = this.state;
    console.log('props: ', this.props);
    console.log('zindex: ', zIndex, 'dataZ: ', dataZ);
    return (
      <Draggable onMouseDown={this.setCardOnTop}>
        <div className={cardStyle} style={{ background: bg, zIndex: zIndex }}>
          <div className="color-items-menu">
            <p className="margin-button" onClick={this.plusSize}>
              +
            </p>
            <p className="margin-button" onClick={this.minusSize}>
              -
            </p>
          </div>
          <div
            className="item-hexcode"
            onDoubleClick={this.fillCardWithColor}
            style={{ background: this.props.color }}
          />
          <h1>{this.props.color}</h1>
        </div>
      </Draggable>
    );
  }
}

export default Card;
