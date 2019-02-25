import React, { Component } from 'react';

import '../styles/Card.css';

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('card props: ', this.props);
    return (
      <div className="card">
        <div className="colorbogyo" />
        <h1>{this.props.hexcolor}</h1>
      </div>
    );
  }
}

export default Card;
