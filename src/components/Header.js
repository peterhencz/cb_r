import React, { Component } from "react";
import Input from "../components/Input.js";
import Button from "../components/Button";

import "../styles/Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      hexcolor: "",
    };
  }

  getColor = hexcolor => {
    this.setState({
      hexcolor,
    });
  };

  render() {
    return (
      <div className="header">
        <Input
          placeholder="hex code"
          onChange={hexcolor => this.getColor(hexcolor.target.value)}
        />
        {console.log("cica: ", this.state)}
        <Button onClick={this.getColor} />
        {this.state.hexcolor}
      </div>
    );
  }
}

export default Header;
