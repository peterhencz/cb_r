import React, { Component } from "react";
import Input from "../components/Input.js";
import Button from "../components/Button";

import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Input />
        <Button />
      </div>
    );
  }
}

export default Header;
