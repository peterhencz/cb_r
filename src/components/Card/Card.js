import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="item-hexcode" style={{ background: this.props.color }} />
        <h1>{this.props.color}</h1>
      </div>
    );
  }
}

export default Card;
