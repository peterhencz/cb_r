import React, { Component } from 'react';

import '../styles/Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="colorbogyo">
          <h1>{this.props.color}</h1>
        </div>
      </div>
    );
  }
}

export default Card;
