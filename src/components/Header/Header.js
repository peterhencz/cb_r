import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import { inputValidChecker } from '../InputValidation';
import { postColor } from '../../actions';
import './Header.css';

class Header extends Component {
  state = {
    color: '',
    inputStyle: 'input',
    errorMessage: '',
  };

  handleInputChange = event => {
    const errorMessages = {
      hex: 'kiscica',
    };
    const checkerOutput = inputValidChecker(event.target.name, event.target.value, errorMessages);
    this.setState(prevState => {
      return {
        ...prevState,
        ...checkerOutput,
      };
    });
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      console.log(event.target.name, event.target.value)
    );
  };

  handleColorClick = color => {
    this.props.postColor(this.state.color);
  };

  render() {
    console.log('this.state: ', this.state);
    return (
      <div className="header">
        <Input
          inputStyle={this.state.inputStyle}
          name="color"
          placeholder="hex code"
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleColorClick}>></Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  postColor,
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
