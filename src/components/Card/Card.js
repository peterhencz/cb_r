import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStyle: 'card',
      bg: '#fff',
      id: '',
      zIndex: 0,
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
    this.setState(
      {
        dataZ: this.state.zIndex + 1,
      },
      console.log('kiscica', this.state.dataZ)
    );
  };

  render() {
    const { cardStyle, bg } = this.state;
    console.log('props: ', this.state);

    return (
      <div className={cardStyle} style={{ background: bg }} onMouseDown={this.setCardOnTop}>
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
