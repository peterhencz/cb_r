import React, { Component } from "react";
import "../styles/Button.css";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      hexcode: "#f4baba",
    };
  }
  render() {
    return (
      <div className="button">
        <button>ok</button>
      </div>
    );
  }
}

export default Button;
