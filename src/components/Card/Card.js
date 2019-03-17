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

  render() {
    return (
      <div className="card" style={{ background: this.state.bg }}>
        <div
          className="item-hexcode"
          onClick={this.bogyoFullSize}
          style={{ background: this.props.color }}
        />
        <h1>{this.props.color}</h1>
      </div>
    );
  }
}

export default Card;
