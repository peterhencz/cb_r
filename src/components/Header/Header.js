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
    inputStyle: 'input',
    colorInputStyle: 'input',
    errorMessage: '',
    displayColorPicker: false,
    colorIsValid: false,
  };

  randomTagPlaceholder() {
    const placeholders = [];
  }

  openPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  closePicker = () => {
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

  handlePostColorClick = color => {
    this.props.postColor('#' + this.state.color);
  };

  render() {
    const buttonClass = this.state.colorIsValid ? 'button ' : 'button button-disabled';
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
          inputStyle="input"
          name="tag"
          placeholder={this.state.tagsholder}
          onChange={this.handleInputChange}
        />
        <Button
          onClick={this.handlePostColorClick}
          className={buttonClass}
          disabled={!this.state.colorIsValid}>
          >
        </Button>
        {Strings('picker_text')}
        <i className="material-icons" onClick={this.openPicker}>
          palette
        </i>
        {this.state.displayColorPicker ? (
          <div className="picker-popover">
            <div className="picker-cover" onClick={this.closePicker} />
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
