import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  state = {
    margin: '1em',
    bg: '#fff',
  };

  bogyoFullSize = () => {
    this.setState({
      bg: this.props.color,
    });
  };

  plusSize = () => {
    this.setState({
      margin: '10em',
    });
  };

  render() {
    return (
      <div className="card" style={{ background: this.state.bg, margin: this.state.margin }}>
        <div
          className="item-hexcode"
          onClick={this.bogyoFullSize}
          style={{ background: this.props.color }}
        />
        <h1>{this.props.color}</h1>
        <p onClick={this.plusSize}>+</p>
      </div>
    );
  }
}

export default Card;
