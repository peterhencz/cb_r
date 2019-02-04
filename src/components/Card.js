import React, { Component } from "react";
import Input from "./Input";
import Header from "./Header";
import "../styles/Card.css";

class Card extends Component {
  constructor() {
    super();
  }

  getColor = hexcolor => {
    this.setState({
      hexcolor,
    });
  };

  render() {
    const hexcolor = this.props;
    console.log("card: ", hexcolor, this.state);
    return (
      <div className="card">
        <div className="colorbogyo" />
        <h1>{() => this.props.getColor()}</h1>
      </div>
    );
  }
}

export default Card;
