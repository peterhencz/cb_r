import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      hexcode: "#f4baba",
    };
  }
  render() {
    return (
      <div className="card">
        <h1>🥭</h1>
        <p>{this.state.hexcode}</p>
      </div>
    );
  }
}

export default Card;
