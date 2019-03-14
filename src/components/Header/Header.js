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
    tagsholder: 'sky, blue, light, etc...',
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
        add your color
        <Input
          input-style={this.state.inputStyle}
          name="color"
          placeholder="hex code"
          onChange={this.handleInputChange}
        />
        with tags
        <Input
          input-style={this.state.inputStyle}
          name="tag"
          placeholder={this.state.tagsholder}
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
