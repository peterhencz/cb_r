import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStyle: 'card',
      bg: '#fff',
      id: '',
      dataZ: 0,
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
    console.log();
    this.setState({
      dataZ: this.state.dataZ + 1,
    });
  };

  render() {
    const { cardStyle, bg, margin } = this.state;
    console.log('props: ', this.state.dataZ);

    return (
      <div
        className={cardStyle}
        onMouseDown={this.setCardOnTop}
        style={{ background: bg, margin: margin, zIndex: this.state.dataZ }}>
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
    );
  }
}

export default Card;
