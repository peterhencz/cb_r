import React, { Component } from 'react';
import '../styles/Button.css';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      hexcolor: '#f4baba',
    };
  }
  render() {
    return (
      <div className="button">
        <button>cica</button>
      </div>
    );
  }
}

export default Button;
