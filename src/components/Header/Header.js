import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '@material-ui/icons/Palette';
import { ChromePicker } from 'react-color';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import { inputValidChecker } from '../InputValidation';
import { postColor } from '../../actions';
import './Header.css';
import Strings from '../Strings.js';
import { isPromise } from 'q';

class Header extends Component {
  state = {
    color: '',
    tagsholder: `${Strings('tag_placeholder')}`,
    inputStyle: 'input',
    errorMessage: '',
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
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
        {Strings('save_color')}
        <Input
          input-style={this.state.inputStyle}
          name="color"
          placeholder={Strings('hexcode')}
          onChange={this.handleInputChange}
        />
        {Strings('with_tags')}
        <Input
          input-style={this.state.inputStyle}
          name="tag"
          placeholder={this.state.tagsholder}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleColorClick}>></Button>
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
