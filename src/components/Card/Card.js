import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  state = {
    margin: '1em',
    bg: '#fff',
  };

  bogyoFullSize = () => {
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
      margin: '10em',
    });
  };

  minusSize = () => {
    this.setState({
      margin: '1em',
    });
  };

  render() {
    return (
      <div className="card" style={{ background: this.state.bg, margin: this.state.margin }}>
        <div class="color-items-menu">
          <p className="margin-button" onClick={this.plusSize}>
            +
          </p>
          <p className="margin-button" onClick={this.minusSize}>
            -
          </p>
        </div>
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
