import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ChromePicker } from 'react-color';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import { inputValidChecker } from '../InputValidation';
import { postColor } from '../../actions';
import './Header.css';
import Strings from '../Strings.js';

class Header extends Component {
  state = {
    color: '',
    tagsholder: `${Strings('tag_placeholder')}`,
    colorInputStyle: 'input',
    errorMessage: '',
    displayColorPicker: false,
    colorIsValid: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleInputChange = event => {
    const checkerOutput = inputValidChecker(event.target.name, event.target.value);
    this.setState(prevState => {
      return {
        ...prevState,
        ...checkerOutput,
      };
    });
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleColorClick = color => {
    this.props.postColor(this.state.color);
  };

  render() {
    console.log('this.state: ', this.state);
    console.log('colorinputstyle: ', this.state.colorInputStyle);
    console.log('buttonClass: ', this.state.buttonClass);
    return (
      <div className="header">
        {Strings('save_color')}
        <Input
          inputStyle={this.state.colorInputStyle}
          name="color"
          placeholder={Strings('hexcode')}
          onChange={this.handleInputChange}
        />
        {Strings('with_tags')}
        <Input
          inputStyle={this.state.inputStyle}
          name="tag"
          placeholder={this.state.tagsholder}
          onChange={this.handleInputChange}
        />
        <Button
          onClick={this.handleColorClick}
          className={this.state.buttonClass}
          disabled={!this.state.colorIsValid}>
          >
        </Button>
        {Strings('picker_text')}
        <i className="material-icons" onClick={this.handleClick}>
          palette
        </i>
        {this.state.displayColorPicker ? (
          <div className="picker-popover">
            <div className="picker-cover" onClick={this.handleClose} />
            <ChromePicker color={this.state.color} />
          </div>
        ) : null}
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
