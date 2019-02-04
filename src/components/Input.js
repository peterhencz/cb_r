import React, { Component } from "react";
import "../styles/Input.css";

class Input extends Component {
  render() {
    return (
      <div className="input">
        <input placeholder="hex code" />
      </div>
    );
  }
}

export default Input;
