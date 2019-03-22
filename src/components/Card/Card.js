import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStyle: 'card',
      bg: '#fff',
      id: '',
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

  render() {
    const { cardStyle, bg, margin } = this.state;
    console.log('props: ', this.props.dataZ);

    return (
      <div
        className={cardStyle}
        style={{ background: bg, margin: margin, zIndex: this.props.dataZ }}>
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
